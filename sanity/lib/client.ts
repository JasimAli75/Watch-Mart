import { createClient } from "next-sanity";

const client = createClient({
  projectId: "mv80qxh3",
  dataset: "production",
  apiVersion: "v2023-07-18",
  useCdn: false,
});
export default client;
