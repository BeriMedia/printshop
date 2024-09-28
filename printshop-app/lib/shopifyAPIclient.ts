import {createStorefrontApiClient} from '@shopify/storefront-api-client';

export const client = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_STORE_DOMAIN as string,
  apiVersion: "2024-07",
  publicAccessToken: process.env.NEXT_PUBLIC_STOREFRONT_API_TOKEN as string,
});