import { Component, Input, Output, EventEmitter, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as common from "./common";
export * from "./common";
import { angularTemplateHtml } from "./angular-variables";

/**
 * @public
 */
@Component({
    selector: "tour",
    template: angularTemplateHtml,
})
export class TourComponent {
    @Input()
    data: common.TourData;
    @Output()
    update = new EventEmitter();

    private index = 0;

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

    private highlight() {
        common.unhighlight(this.data.steps);
        if (this.step) {
            common.highlight(this.step);
            if (typeof this.step.scrollTop === "number") {
                window.scrollTo(0, this.step.scrollTop);
            }
        }
    }
}

/**
 * @public
 */
@NgModule({
    declarations: [
        TourComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        TourComponent,
    ],
})
export class TourModule { }
