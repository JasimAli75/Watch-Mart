import { NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { SanityClient } from "sanity";

let client: SanityClient = createClient({
  //   token: `${process.env.SANITY_ACCESS_TOKEN}`,
  dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
  apiVersion: "v2023-07-13",
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
