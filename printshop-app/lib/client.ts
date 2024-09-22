import { createStorefrontClient } from '@shopify/hydrogen-react';

// Define the type for the client
export const client = createStorefrontClient({
    	// load environment variables according to your framework and runtime
  storeDomain: process.env.NEXT_PUBLIC_STORE_DOMAIN as string, // Type assertion for env variables
  publicStorefrontToken: process.env.NEXT_PUBLIC_STOREFRONT_API_TOKEN as string,
});
