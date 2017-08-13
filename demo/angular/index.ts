import "core-js/es6";
import "core-js/es7/reflect";
import "zone.js/dist/zone";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";

enableProdMode();

import { Component } from "@angular/core";

import { data } from "../common";

@Component({
    selector: "app",
    template: `
    <div>
        <a href="https://github.com/plantain-00/tour-component/tree/master/demo/angular/index.ts" target="_blank">the source code of the demo</a>
        <br/>
        <tour [data]="data"
             *ngIf="tourIsVisible"
            (update)="update($event)">
        </tour>
        <button (click)="deleteValue()">delete the value in localstorage</button>
        <div id="step_1" style="position: absolute; left: 10px; top: 210px; width: 200px; height: 100px; line-height: 100px; text-align: center;">step 1 target</div>
        <div id="step_2" style="position: absolute; left: 310px; top: 10px; width: 200px; height: 100px; line-height: 100px; text-align: center;">step 2 target</div>
        <div id="step_3" style="position: absolute; right: 80px; top: 150px; width: 200px; height: 100px; line-height: 100px; text-align: center;">step 3 target</div>
        <div id="step_4" style="position: absolute; right: 430px; top: 800px; width: 200px; height: 100px; line-height: 100px; text-align: center;">step 4 target</div>
    </div>
    `,
})
class MainComponent {
    data = data;

    get tourIsVisible() {
        return this.data.index >= 0 && this.data.index < this.data.steps.length;
    }

    deleteValue() {
        localStorage.removeItem(data.localStorageKey);
        this.update(0);
    }

    update(index: number) {
        this.data.index = index;
    }
}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { TourModule } from "../../dist/angular";

@NgModule({
    imports: [BrowserModule, FormsModule, TourModule],
    declarations: [MainComponent],
    bootstrap: [MainComponent],
})
class MainModule { }

platformBrowserDynamic().bootstrapModule(MainModule);
