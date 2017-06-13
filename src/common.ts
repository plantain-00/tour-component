export type TourData = {
    steps: Step[],
    localStorageKey: string;
};

export type Step = {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
    direction: "left" | "right" | "top" | "bottom";
    content: string;
    next: string;
};
