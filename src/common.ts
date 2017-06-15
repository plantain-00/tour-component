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
    scrollTop?: number;
};

export function scrollToY(scrollTargetY = 0, speed = 2000, easing: "easeOutSine" | "easeInOutSine" | "easeInOutQuint" = "easeOutSine") {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    let currentTime = 0;
    const time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));
    const easingEquations: { [easing: string]: (pos: number) => number } = {
        easeOutSine: (pos: number) => {
            return Math.sin(pos * (Math.PI / 2));
        },
        easeInOutSine: (pos: number) => {
            return (-0.5 * (Math.cos(Math.PI * pos) - 1));
        },
        easeInOutQuint: (pos: number) => {
            pos /= 0.5;
            if (pos < 1) {
                return 0.5 * Math.pow(pos, 5);
            }
            return 0.5 * (Math.pow((pos - 2), 5) + 2);
        },
    };

    function tick() {
        currentTime += 1 / 60;

        const p = currentTime / time;
        const t = easingEquations[easing](p);

        if (p < 1) {
            (window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                (window as any).mozRequestAnimationFrame ||
                (callback => {
                    window.setTimeout(callback, 1000 / 60);
                })
            )(tick);

            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
            window.scrollTo(0, scrollTargetY);
        }
    }

    tick();
}
