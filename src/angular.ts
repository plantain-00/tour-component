import { Component, Input } from "@angular/core";
import * as common from "./common";
import { srcAngularTemplateHtml } from "./angular-variables";

@Component({
    selector: "tour",
    template: srcAngularTemplateHtml,
})
export class TourComponent {
    @Input()
    data: common.TourData;

    index = -1;

    ngOnInit() {
        this.index = this.data.index;
    }

    get step() {
        return (this.index < this.data.steps.length && this.index >= 0) ? this.data.steps[this.index] : null;
    }
    get arrowClassName() {
        return this.step ? `tour-arrow tt-${this.step.direction}` : "tour-arrow";
    }

    next() {
        this.index++;
        if (this.index >= this.data.steps.length) {
            this.close();
        }
    }

    close() {
        this.index = -1;
        if (this.data.localStorageKey) {
            localStorage.setItem(this.data.localStorageKey, "1");
        }
    }
}
