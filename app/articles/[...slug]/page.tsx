import { articles } from "#site/content";
import { MDXContent } from "@/components/mdxComponents";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: {
    slug: string[];
  };
}

async function getArticleFromParams(params: ArticlePageProps["params"]) {
  const slug = params?.slug?.join("/");
  const article = articles.find((article) => article.slugAsParams === slug);
  return article;
}

export async function generateStaticParams(): Promise<
  ArticlePageProps["params"][]
> {
  return articles.map((article) => ({ slug: article.slugAsParams.split("/") }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleFromParams(params);

  if (!article || !article.published) {
    notFound();
  }

  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mb-2">{article.title}</h1>
      {article.description ? (
        <p className="text-xl mt-0 text-muted-foreground">
          {article.description}
        </p>
      ) : null}
      <hr className="my-4" />
      <MDXContent code={article.body} />
    </article>
  );
}
