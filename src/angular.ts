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
}
