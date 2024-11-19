import { defineConfig, defineCollection, s } from "velite";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

// define a collection of articles in velite
const articles = defineCollection({
  name: "Articles",
  pattern: "articles/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(), //optional description
      date: s.isodate(), // date of the article for filtering by date
      published: s.boolean().default(true), //check if article was published
      body: s.mdx(),
    })
    .transform(computedFields),
});

// set up where to store article assets
export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { articles },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
