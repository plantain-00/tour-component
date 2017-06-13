import * as common from "../dist/common";

export const data: common.TourData = {
    steps: [
        { left: "100px", top: "50px", direction: "top", content: "step 1", next: "next" },
        { left: "200px", top: "100px", direction: "bottom", content: "step 2", next: "next" },
        { right: "300px", top: "150px", direction: "left", content: "step 3", next: "next" },
        { right: "300px", top: "200px", direction: "right", content: "step 4", next: "done" },
    ],
    localStorageKey: "tour-test",
};

export const index = localStorage.getItem(data.localStorageKey) ? -1 : 0;
