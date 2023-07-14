import { NextResponse } from "next/server";
import { createClient } from "next-sanity";

export const client = createClient({
  token: `${process.env.SANITY_ACCESS_TOKEN}`,
  dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
  apiVersion: "v2023-07-13",
  useCdn: true,
});

export async function GET() {
  try {
    return NextResponse.json({ message: "jasim ali rajput" });
  } catch (error) {
    return NextResponse.json({ message: "jasim ali rajput no show" });
  }
}
