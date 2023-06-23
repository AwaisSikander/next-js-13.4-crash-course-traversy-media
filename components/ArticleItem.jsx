import Link from "next/link";
import articleStyles from "@/styles/Article.module.css";

export default function ArticleItem({ article }) {
  return (
    <Link
      href="/article/[id]"
      as={`/article/${article.id}`}
      className={articleStyles.card}
    >
      {/* <a > */}
      <h3>{article.title} &rarr;</h3>
      <p>{article.excerpt}</p>
      {/* </a> */}
    </Link>
  );
}
