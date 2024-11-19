// This file acts as a local configuration, where all changes can be made here

export const siteConfig = {
  name: "Trevor Rowland's Portfolio",
  url: "https://trow.dev",
  description: "NextJS Portfolio Site built with Velire, Tailwind and ShadCN.",
  author: "dBCooper2",
  links: {
    instagram: "link-to-ig",
    github: "link-to-gh",
    linkedin: "link-to-li",
  },
};

export type SiteConfig = typeof siteConfig; //this lets us use typescript
