import { getCollection } from "astro:content";

const products = await getCollection("product");

export const GET = async ({}) => {
  return new Response(JSON.stringify(products), {
    headers: {
      "content-type": "application/json",
    },
    status: 200,
  });
};
