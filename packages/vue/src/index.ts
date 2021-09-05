import { defineComponent, PropType } from 'vue'
import * as common from 'tour-component'
export * from 'tour-component'
import { indexTemplateHtml } from './variables'

/**
 * @public
 */
export const Tour = defineComponent({
  render: indexTemplateHtml,
  props: {
    data: {
      type: Object as PropType<common.TourData>,
      required: true,
    },
  },
  data: () => {
    return {
      index: 0,
    }
  },
  computed: {
    step(): common.Step | undefined {
      return (this.index < this.data.steps.length && this.index >= 0) ? this.data.steps[this.index] : undefined
    },
    arrowClassName(): string {
      return this.step ? `tour-arrow tt-${this.step.direction}` : 'tour-arrow'
    },
    position(): {
      left?: string;
      right?: string;
      top?: string;
      bottom?: string;
    } {
      return common.getStepPosition(this.step)
    },
  },
  beforeMount() {
    this.index = this.data.index
  },
  mounted() {
    this.highlight()
  },
  methods: {
    next() {
      this.index++
      this.$emit('update', this.index)
      this.highlight()
      if (this.index >= this.data.steps.length) {
        this.close()
      }
    },
    close() {
      this.index = -1
      this.$emit('update', this.index)
      this.highlight()
      if (this.data.localStorageKey) {
        localStorage.setItem(this.data.localStorageKey, '1')
      }
    },
    highlight() {
      common.unhighlight(this.data.steps)
      if (this.step) {
        common.highlight(this.step)
        if (typeof this.step.scrollTop === 'number') {
          window.scrollTo(0, this.step.scrollTop)
        }
      }
    },
  }
})
