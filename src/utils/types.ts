import { z } from 'zod'

export const Product = z.object({
  category: z.string(),
  price: z.string(),
  stocked: z.boolean(),
  name: z.string(),
})

export type Product = z.infer<typeof Product>

export const Products = z.array(Product)

export type Products = z.infer<typeof Products>
