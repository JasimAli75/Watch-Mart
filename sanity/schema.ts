import { type SchemaTypeDefinition } from "sanity";
import { product } from "./Product/Product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
};
