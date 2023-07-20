// product list schema
export const Products = {
  name: "products",
  type: "document",
  fields: [
    {
      name: "productName",
      type: "string",
      title: "ProductName",
    },
    {
      title: "slug",
      name: "slug",
      type: "slug",
      options: {
        source: "productName",
        maxLength: 200,
        slugify: (input: any) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(200),
      },
    },
    {
      name: "description",
      type: "array",
      title: "Description",
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
      name: "size",
      type: "array",
      title: "Size",
      of: [{ type: "string" }],
    },
    {
      name: "quantity",
      type: "number",
      title: "Quantity",
    },
  ],
};
