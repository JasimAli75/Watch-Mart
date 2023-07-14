import { NextResponse } from "next/server";
import { createClient } from "next-sanity";

export const client = createClient({
  token: `${process.env.SANITY_ACCESS_TOKEN}`,
  apiVersion: "2023-07-09",
  dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
  useCdn: true,
});
export async function GET() {
  try {
    let response = await client.fetch(`*[_type == "product"]`);
    console.log(response);
    return NextResponse.json({ response });
  } catch (error) {
    console.log((error as { massage: string }).massage);
    return NextResponse.json({ Error: error });
  }
}
