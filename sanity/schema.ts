import { type SchemaTypeDefinition } from "sanity";
import Products from "./Schemas/Products";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products],
};
