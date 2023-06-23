import { articles } from "@/data";
import { NextResponse } from "next/server";
// export default function handler(req, res) {
//   res.status(200).json(articles);
// }
export async function GET(request) {
  return NextResponse.json(articles);
}
