import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ message: "jasim ali rajput" });
  } catch (error) {
    return NextResponse.json({ message: "jasim ali rajput no show" });
  }
}
