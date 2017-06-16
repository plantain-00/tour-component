import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as common from "./common";
import { srcAngularTemplateHtml } from "./angular-variables";

@Component({
    selector: "tour",
    template: srcAngularTemplateHtml,
})
export class TourComponent {
    @Input()
    data: common.TourData;
    @Input()
    index: number;
    @Output()
    update = new EventEmitter();

    get step() {
        const step = (this.index < this.data.steps.length && this.index >= 0) ? this.data.steps[this.index] : null;
        common.unhighlight(this.data.steps);
        if (step) {
            common.highlight(step);
            if (typeof step.scrollTop === "number") {
                window.scrollTo(0, step.scrollTop);
            }
        }
        return step;

    }
    get arrowClassName() {
        return this.step ? `tour-arrow tt-${this.step.direction}` : "tour-arrow";
    }

    getPosition(position?: string | (() => string)) {
        return common.getPosition(position);
    }

    next() {
        this.update.emit(this.index + 1);
        if (this.index + 1 >= this.data.steps.length) {
            this.close();
        }
    }

    close() {
        this.update.emit(-1);
        if (this.data.localStorageKey) {
            localStorage.setItem(this.data.localStorageKey, "1");
        }
    }
}
