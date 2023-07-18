import { type SchemaTypeDefinition } from "sanity";
import { products } from "./Schemas/products";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products],
};
