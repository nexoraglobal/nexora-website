import RSSParser from "rss-parser";
import { extractImageUrl } from "~/lib/utils";

export const fetchAllMediumBlogPosts = async () => {
  const parser = new RSSParser();
  const CORS_PROXY = "https://api.allorigins.win/get?url=";
  const feedURL = `https://medium.com/feed/@nexoraglobal`;
  const response = await fetch(`${CORS_PROXY}${encodeURIComponent(feedURL)}`);
  const data = await response.json();
  const feed = await parser.parseString(data.contents);

  const blogsList: IBlog[] = feed.items.map((post, index) => ({
    id: post.guid ?? index.toString(),
    title: post.title ?? "",
    imageUrl: extractImageUrl(post["content:encoded"]) ?? "",
    content: post["content:encodedSnippet"].substring(0, 200) ?? "",
    categories: post.categories ?? [],
    link: post.link ?? "",
  }));

  return blogsList;
};
