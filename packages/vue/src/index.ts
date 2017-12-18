import Vue from "vue";
import Component from "vue-class-component";
import * as common from "tour-component";
export * from "tour-component";
import { indexTemplateHtml, indexTemplateHtmlStatic } from "./variables";

@Component({
    render: indexTemplateHtml,
    staticRenderFns: indexTemplateHtmlStatic,
    props: ["data"],
})
export class Tour extends Vue {
    data: common.TourData;
    private index = 0;

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

Vue.component("tour", Tour);
