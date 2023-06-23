import { articles } from "@/data";
import { NextResponse } from "next/server";
import { notFound } from "next/navigation";
// export default function handler(req, res) {
//   res.status(200).json(articles);
// }
export async function GET(request, context) {
  const id = context.params.id;
  const article = articles.find((post) => post.id === id);
  if (article) {
    return NextResponse.json(article);
  } else {
    return notFound();
  }
}
