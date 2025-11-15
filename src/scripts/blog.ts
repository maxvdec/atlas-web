export interface BlogPost {
    title: string;
    link: string;
    date: string;
    description: string;
    imageUrl?: string;
}

export interface BlogPostRaw {
    name: string;
    desc: string;
    image: string;
    markdown: string;
    date: string;
}
