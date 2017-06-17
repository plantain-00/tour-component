import Vue from "vue";
import Component from "vue-class-component";
import * as common from "./common";
import { srcVueTemplateHtml } from "./vue-variables";

@Component({
    template: srcVueTemplateHtml,
    props: ["data"],
})
class Tour extends Vue {
    data: common.TourData;
    index = 0;

    get step() {
        return (this.index < this.data.steps.length && this.index >= 0) ? this.data.steps[this.index] : null;
    }
    get arrowClassName() {
        return this.step ? `tour-arrow tt-${this.step.direction}` : "tour-arrow";
    }
    get position() {
        return common.getStepPosition(this.step);
    }

    beforeMount() {
        this.index = this.data.index;
    }

    mounted() {
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

    next() {
        this.index++;
        this.$emit("update", this.index);
        this.highlight();
        if (this.index >= this.data.steps.length) {
            this.close();
        }
    }

    close() {
        this.index = -1;
        this.$emit("update", this.index);
        this.highlight();
        if (this.data.localStorageKey) {
            localStorage.setItem(this.data.localStorageKey, "1");
        }
    }
}

Vue.component("tour", Tour);
