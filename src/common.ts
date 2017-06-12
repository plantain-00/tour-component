export type TourData = {
    steps: Step[],
    index: number,
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
