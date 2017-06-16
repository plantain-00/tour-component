import Vue from "vue";
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
        const step = (this.index < this.data.steps.length && this.index >= 0) ? this.data.steps[this.index] : null;
        Vue.nextTick(() => {
            common.unhighlight(this.data.steps);
            if (step) {
                common.highlight(step);
                if (typeof step.scrollTop === "number") {
                    window.scrollTo(0, step.scrollTop);
                }
            }
        });
        return step;
    }
    get arrowClassName() {
        return this.step ? `tour-arrow tt-${this.step.direction}` : "tour-arrow";
    }
    get position() {
        return common.getStepPosition(this.step);
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
