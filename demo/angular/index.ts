import "core-js/es6";
import "core-js/es7/reflect";
import "zone.js/dist/zone";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";

enableProdMode();

import { Component } from "@angular/core";

import { data, index } from "../common";

@Component({
    selector: "app",
    template: `
    <div>
        <a href="https://github.com/plantain-00/tour-component/tree/master/demo/angular/index.ts" target="_blank">the source code of the demo</a>
        <br/>
        <tour [data]="data"
            [index]="index"
            (update)="update($event)">
        </tour>
        <button (click)="deleteValue()">delete the value in localstorage</button>
    </div>
    `,
})
export class MainComponent {
    data = data;
    index = index;

    deleteValue() {
        localStorage.removeItem(data.localStorageKey);
        this.update(0);
    }

    update(index: number) {
        this.index = index;
    }
}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { TourComponent } from "../../dist/angular";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [MainComponent, TourComponent],
    bootstrap: [MainComponent],
})
class MainModule { }

platformBrowserDynamic().bootstrapModule(MainModule);
