// product list schema
export const product = {
  name: "product",
  type: "document",
  fields: [
    {
      name: "productName",
      title: "ProductName",
      type: "string",
    },
    {
      title: "slug",
      name: "slug",
      type: "slug",
      options: {
        source: "productName",
        maxLength: 200,
        slugify: (input: any) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(2, 200),
      },
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "image",
      type: "array",
      title: "Image",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "text",
              title: "Alternative text",
            },
          ],
        },
      ],
    },
    {
      name: "productType",
      type: "array",
      title: "ProductType",
      of: [{ type: "string" }],
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "strapsize",
      type: "array",
      title: "StrapSizes",
      of: [{ type: "string" }],
    },
    {
      name: "quantity",
      type: "number",
      title: "Quantity",
    },
  ],
};
