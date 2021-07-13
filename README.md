## Environment Variables

You must create a `.env.development` file in the front-end's root folder. If you do not add this file, the application may crash. The `.env.development` file requires the following environment variables:

- `GATSBY_APP_STRAPI_URL`: the URL to the Strapi CMS
- `GATSBY_STRIPE_KEY`: the publishable Stripe key from https://stripe.com/

### Example

If you want to test the application, please copy the text from the `.env.example` file and paste it into a `.env.development` file. Then, start your application.

## Commands

### Install the packages

```bash
yarn install
```

### Start the server

```bash
yarn develop
```
