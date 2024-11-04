# Nuxt + Craft CMS Starter

## README UNDER CONSTRUCTION 🚧

A minimal, production-ready starter for Nuxt 3 and Craft CMS 5 projects.

## Features
- 🚀 Nuxt 3 + Craft CMS 5
- 📱 Responsive pagination
- 🔍 Preview mode support
- 📝 Blog and Guestbook examples
- 🎨 TailwindCSS styling

## Project Structure



## Quick Start

1. Clone this repository
   
2. Optional: Change the default domains (Defaults: Frontend = https://starter-nuxt.ddev.site, Backend = https://api.starter-nuxt.ddev.com):
   - Edit `.ddev/config.yaml`
     - Update `name`
     - Change the front end and backend domains under `additional_hostnames`
     - Change the front end, backend, and virtual host domains under `web_environment`
   - Change the `server name` in `.ddev/nginx_full/api-site.conf` to match backend url
   - Change the `server name` in `.ddev/nginx_full/nuxt-site.conf` to match frontend url

3. Setup ddev environment
   ```bash
   ddev start
   ```

4. Set up your Craft CMS backend:
   ```bash
   cd backend
   ddev composer install
   ddev php craft setup
   ```

5. Configure domains for Craft in `backend/.env`
   - Update the following to match your ddev configuration
   ```
   PRIMARY_SITE_URL="https://api.starter-nuxt.ddev.site"
   PREVIEW_URL="https://starter-nuxt.ddev.site"
   ```
6. Generate a token for the Posts GraphQL Schema
   - Sign into https://api.starter-nuxt.ddev.site/admin
   - Navigate to https://api.nuxt-test.ddev.site/admin/graphql/tokens and create a new token for the Posts schema

7. Set up your Nuxt frontend:
   ```bash
   cd frontend
   ddev npm install
   ```

8. Configure your frontend environment:
   - Copy `.env.example` to `.env`
   - Update to match your Craft installation
   - Update `AUTH_HEADER` to the token generated in step 6

9.  Start development:
   ```bash
   ddev npm run dev
   ```

## Key Features

### Pagination
The starter includes a reusable pagination system that:
- Maintains page state in the URL
- Supports browser back/forward navigation
- Shows loading states during transitions

### Preview Mode
Full support for Craft CMS preview functionality:
- Live preview while editing
- Shareable preview URLs
- Token-based authentication

### GraphQL Integration
Clean GraphQL implementation with:
- Error handling
- Preview token support
- Pagination support

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
