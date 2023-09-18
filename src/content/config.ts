import { z, defineCollection } from "astro:content";

const product = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string().max(50, {
      message: "You must keep the name to 50 characters or less",
    }),
    price: z.number(),
    color: z.string(),
    brand: z.string(),
    category: z.enum([
      "Automotive",
      "Home & Garden",
      "Fashion",
      "Electronics",
      "Toys",
    ]),
  }),
});

export const collections = {
  product,
};
