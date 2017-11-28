import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TourComponent } from "./index.component";
export * from "tour-component";
export * from "./index.component";

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
