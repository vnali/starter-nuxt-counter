import { defineNuxtPlugin } from '#app';
import { useGraphQL } from '~/composables/useGraphQL';
import { COUNTER_QUERY } from '~/queries/counter.mjs';
import { reactive } from 'vue';

export default defineNuxtPlugin(async (nuxtApp) => {
  // Reactive variable to hold site counter data

  const graphql = useGraphQL();

  const counterData = reactive({
    siteVisits: [], // Default value
    pageVisits: [],
  });

  const sendCounterData = () => {
    const data = {
      pageUrl: decodeURIComponent(window.location.href),
    };

    fetch('/api/counter/' + "?t=" + new Date().getTime(), {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch(error => {
      console.error('Error sending counter data:', error);
    });
  };

  const counter = async () => {
    // Function to generate a random value
    function getRandomValue() {
      return (Math.random() + 1).toString(36).substring(7); // Generates a random number between 0 and 1
    }

    // Generate a new random value for each request
    const randomValue = getRandomValue();

    try {
      const result = await graphql.query(COUNTER_QUERY, {
        t: randomValue, // Pass the random value as a variable
        page: decodeURIComponent(window.location.href)
      });

      // Update the reactive object with the new data
      counterData.siteVisits = result?.counter || [];
      counterData.pageVisits = result?.pageVisits || [];
    } catch (err) {
      console.error('Error fetching globals:', err);
    }
  };

  // Provide the reactive variable globally
  nuxtApp.provide('counterData', counterData);

  // Listen for route changes
  nuxtApp.$router.afterEach(() => {
    if (import.meta.client) {
      sendCounterData();
      counter();
    } else {
      console.log('Server-side rendering');
    }
  });
});
