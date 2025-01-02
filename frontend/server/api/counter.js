export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig();
    const origin = event.node.req.headers.origin;
  
    if (origin !== config.public.BASE_URL) {
      throw createError({ statusCode: 403, statusMessage: 'Forbidden' });
    }
    // Read the original body
    const body = await readBody(event);

    // Modify the body
    const newBody = {
        ...body,          // Include existing data
        counterSecretToken: config.private.COUNTER_SECRET_TOKEN, // Add/modify data
    };

    // Forward the request with the new body to another API
    const response = await fetch(config.public.COUNTER_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(newBody), // Send the modified body
    });

    // Return the response from the forwarded request
    const responseData = await response.json();
    return responseData;
})