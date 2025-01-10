# Craft CMS + Nuxt + Counter plugin Starter

- This repository adds a counter plugin to track site and page visits in the [Craft CMS + Nuxt Starter](https://github.com/craftcms/starter-nuxt/).

- Please note that this repository is provided as a sample and should not be used in production environments.
- For more information please visit [Craft CMS + Nuxt Starter](https://github.com/craftcms/starter-nuxt/blob/main/README.md).

## Quick Start

This project assumes you have our recommended development environment  [DDEV](https://ddev.com) installed and up-to-date.

1. Clone this repository, and move into the new directory:
    ```bash
    git clone https://github.com/vnali/starter-nuxt-counter.git
    # ...
    cd starter-nuxt-counter
    ```

1. (Optional) Adjust the DDEV project name and domains. See [this section](https://github.com/craftcms/starter-nuxt/blob/main/README.md#running-on-a-different-domain) for more information.

1. Set up your Craft CMS backend:

    ```bash
    ddev composer install
    ddev craft install
    ```

    Write down the username and password you choose, during installation. You’ll need it to [log in to the control panel](#control-panel).

1. Generate a token for the _Guestbook_ GraphQL Schema:

    ```bash
    # Display a list of schemas and UUIDs:
    ddev craft graphql/list-schemas

    # Use the “Guestbook” schema ID to generate a token:
    ddev craft graphql/create-token c7d2eb61-cdde-4a76-88a9-eb30ddcf155b
    ```

1. Configure your frontend environment:

    - Copy `frontend/.env.example` to `frontend/.env`;
    - Update `GRAPHQL_TOKEN` to the token generated in the previous step;

1. Install front-end dependencies:

    ```bash
    ddev fe npm install
    ```

1. Start the Nuxt development server:

    ```bash
    ddev fe npm run dev
    ```

1. Visit backend: https://api.starter-nuxt-counter.ddev.site/ and install the counter plugin.  

1. Go to plugin settings and enable counter for your site at Site settings.

1. Optionally add widgets like visits, ... to the user dashboard

1. Visit fornt end: https://starter-nuxt-counter.ddev.site/ 

1. There is a statistics block at the footer of every page that shows site and page visits for today.