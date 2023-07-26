import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion: "v2023-07-20",
  dataset: "production",
  projectId: "hb0ijj6s",
  useCdn: false,
  token:
    "sksPDHNnTE2jWaxSIywGnN3T3giNQGGcdqA6PORaW3IgERXS00TO4VdQBV4hqfNi2FFVkCQtf5VZ1uX93MCYO1oBSXjxq59lG1tBfhW9F7HvjIt6qe34d2HYJrESxScMQastP0MD7f1w7Opa96MNmdXCpJb5TL25i05rQAeR8cBwsq2Xi8Xl",
});
