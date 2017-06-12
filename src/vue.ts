import * as Vue from "vue";
import Component from "vue-class-component";
import * as common from "./common";
import { srcVueTemplateHtml } from "./vue-variables";

@Component({
    template: srcVueTemplateHtml,
    props: ["data"],
})
class Tour extends Vue {
    data: common.TourData;

    get step() {
        return (this.data.index < this.data.steps.length && this.data.index >= 0) ? this.data.steps[this.data.index] : null;
    }
    get arrowClassName() {
        return this.step ? `tour-arrow tt-${this.step.direction}` : "tour-arrow";
    }
    get position() {
        return this.step ? {
            left: this.step.left,
            right: this.step.right,
            top: this.step.top,
            bottom: this.step.bottom,
        } : {};
    }

    next() {
        this.data.index++;
    }

    close() {
        this.data.index = -1;
    }
}

Vue.component("tour", Tour);
