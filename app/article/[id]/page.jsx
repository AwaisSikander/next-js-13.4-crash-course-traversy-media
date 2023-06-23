import { server } from "@/config";

import Link from "next/link";
export default async function ArticleById({ params }) {
  const { id } = params;
  const article = await getData(id);

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
}

const getData = async (id) => {
  const res = await fetch(`${server}/api/articles/${id}`);
  const articles = await res.json();

  return articles;
};

export async function generateStaticParams() {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return articles.map((article) => ({
    id: article.id.toString(),
  }));
}

// const getData = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const articles = await res.json();

//   return articles;
// };

// export async function generateStaticParams() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const articles = await res.json();

//   return articles.map((article) => ({
//     id: article.id.toString(),
//   }));
// }
