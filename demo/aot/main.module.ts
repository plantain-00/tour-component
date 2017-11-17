import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { TourModule } from "../../dist/aot/angular";
import { MainComponent } from "./main";

@NgModule({
    imports: [BrowserModule, FormsModule, TourModule],
    declarations: [MainComponent],
    bootstrap: [MainComponent],
})
export class MainModule { }
