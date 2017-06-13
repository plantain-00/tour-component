import * as Vue from "vue";
import Component from "vue-class-component";
import * as common from "./common";
import { srcVueTemplateHtml } from "./vue-variables";

@Component({
    template: srcVueTemplateHtml,
    props: ["data", "index"],
})
class Tour extends Vue {
    data: common.TourData;
    index: number;

    get step() {
        return (this.index < this.data.steps.length && this.index >= 0) ? this.data.steps[this.index] : null;
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
        this.$emit("update", this.index + 1);
        if (this.index + 1 >= this.data.steps.length) {
            this.close();
        }
    }

    close() {
        this.$emit("update", -1);
        if (this.data.localStorageKey) {
            localStorage.setItem(this.data.localStorageKey, "1");
        }
    }
}

Vue.component("tour", Tour);
