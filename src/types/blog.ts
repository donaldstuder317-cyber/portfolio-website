export type Author = {
  name: string;
  image?: string;
  bio?: string;
  slug?: { current?: string } | string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: number | string;
  title: string;
  slug: { current?: string } | string;
  metadata?: string;
  body?: unknown[];
  mainImage?: string;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
};
