// import { NextResponse } from "next/server";
// import client from "../../../../sanity/lib/client";

import client from "../../../../sanity/lib/client";

// export async function GET() {
//   try {
//     let response = await client.fetch(`*[_type == "products"]`);
//     console.log(response);
//     return NextResponse.json({ response });
//   } catch (error) {
//     console.log((error as { massage: string }).massage);
//     return NextResponse.json({ Error: error });
//   }
// }

export const fetchTutorials = async (query: string): Promise<any> => {
  return await client.fetch(query);
};
