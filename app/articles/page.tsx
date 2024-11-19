import { articles } from "#site/content";
import { PostItem } from "@/components/postItem";
import { sortArticles } from "@/lib/utils";

export default async function ArticlesPage() {
  const sortedArticles = sortArticles(
    articles.filter((article) => article.published),
  );
  const displayArticles = sortedArticles;

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 mdLflex-row md:justify-between">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Articles
          </h1>
          <p className="text-xl text-muted-foregorund">My Writing</p>
        </div>
      </div>
      <hr className="mt-8" />
      {displayArticles?.length > 0 ? (
        <ul className="flex flex-col">
          {displayArticles.map((article) => {
            const { slug, date, title, description } = article;
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Nothing to see here... yet</p>
      )}
    </div>
  );
}
