// import Image from "next/image";
import { server } from "@/config";
import ArticleList from "@/components/ArticleList";

export default async function Home() {
  const data = await getData();
  return (
    <div>
      <ArticleList articles={data} />
    </div>
  );
}

const getData = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return articles;
};
