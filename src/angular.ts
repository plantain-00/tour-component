import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as common from "./common";
import { angularTemplateHtml } from "./angular-variables";

@Component({
    selector: "tour",
    template: angularTemplateHtml,
})
export class TourComponent {
    @Input()
    data: common.TourData;
    @Output()
    update = new EventEmitter();

    index = 0;

    get step() {
        return (this.index < this.data.steps.length && this.index >= 0) ? this.data.steps[this.index] : null;
    }
    get arrowClassName() {
        return this.step ? `tour-arrow tt-${this.step.direction}` : "tour-arrow";
    }

    ngOnInit() {
        this.index = this.data.index;
    }

    ngAfterViewInit() {
        this.highlight();
    }

    highlight() {
        common.unhighlight(this.data.steps);
        if (this.step) {
            common.highlight(this.step);
            if (typeof this.step.scrollTop === "number") {
                window.scrollTo(0, this.step.scrollTop);
            }
        }
    }

    getPosition(position?: string | (() => string)) {
        return common.getPosition(position);
    }

    next() {
        this.index++;
        this.update.emit(this.index);
        this.highlight();
        if (this.index >= this.data.steps.length) {
            this.close();
        }
    }

    close() {
        this.index = -1;
        this.update.emit(this.index);
        this.highlight();
        if (this.data.localStorageKey) {
            localStorage.setItem(this.data.localStorageKey, "1");
        }
    }
}
