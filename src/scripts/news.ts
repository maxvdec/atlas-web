import type { BlogPost, BlogPostRaw } from "./blog";

export interface NewsItem extends BlogPost {
    slug: string;
    markdown: string;
}

export const NEWS_JSON_ENDPOINT = "/news.json";

const normalizeMarkdownPath = (path: string) => {
    if (!path) {
        return "";
    }

    const sanitized = path.trim();
    const withoutExtension = sanitized.replace(/\.md$/i, "");

    const slug = withoutExtension
        .replace(/^\//, "")
        .replace(/^news\//i, "")
        .split("/")
        .filter(Boolean)
        .join("-");

    return slug || "news-item";
};

export const mapBlogPostRawToNewsItem = (raw: BlogPostRaw): NewsItem => {
    const slug = normalizeMarkdownPath(raw.markdown);

    return {
        title: raw.name,
        link: `/news/${slug}`,
        date: raw.date,
        description: raw.desc,
        imageUrl: raw.image,
        slug,
        markdown: raw.markdown,
    };
};

export const sortNewsByDateDesc = (items: NewsItem[]) =>
    [...items].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

export const getLatestNews = (items: NewsItem[], limit = 3) =>
    sortNewsByDateDesc(items).slice(0, limit);
