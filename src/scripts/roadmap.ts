export interface RoadmapFeature {
    title: string;
    description: string;
    status: "planned" | "finished";
    blogURL?: string;
}

export interface Roadmap {
    title: string;
    description: string;
    coverImage: string;
    features: RoadmapFeature[];
}

export interface RoadmapSummary {
    title: string;
    description: string;
    roadmapURL: string;
}
