import {createStorefrontApiClient} from '@shopify/storefront-api-client';

//qureies
import { productQuery } from './queries';

export const client = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_STORE_DOMAIN as string,
  apiVersion: "2024-07",
  publicAccessToken: process.env.NEXT_PUBLIC_STOREFRONT_API_TOKEN as string,
});

// Function to fetch product data by handle
export async function fetchProductByHandle(handle: string) {
  try {
    const { data, errors, extensions } = await client.request(productQuery, {
      variables: { handle },
    });
    if (errors) {
      console.error(errors);
      throw new Error('Shopify Error: Failed to fetch product data');
    }
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}