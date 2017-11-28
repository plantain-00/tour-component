import * as common from "../dist/";

export const data: common.TourData = {
    steps: [
        { left: "60px", top: "90px", direction: "top", content: "step 1", next: "next", targetElementId: "step_1" },
        { left: "350px", top: "130px", direction: "bottom", content: "step 2", next: "next", targetElementId: "step_2" },
        { right: "300px", top: "150px", direction: "left", content: "step 3", next: "next", targetElementId: "step_3" },
        { right: () => "300px", top: "800px", direction: "right", content: "step 4", next: "done", scrollTop: 900, targetElementId: "step_4" },
    ],
    localStorageKey: "tour-test",
    index: localStorage.getItem("tour-test") ? -1 : 0,
};
