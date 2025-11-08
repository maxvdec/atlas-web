export interface NavigationPage {
    title: string;
    description: string;
    link: string;
}

export interface NavigationGroup {
    groupTitle: string;
    pages: NavigationPage[];
}
export interface NavigationOption {
    groups: NavigationGroup[];
}
