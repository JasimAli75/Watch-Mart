import { type SchemaTypeDefinition } from "sanity";
import { Products } from "./Schema/products";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products],
};
