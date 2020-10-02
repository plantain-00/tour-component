import { createApp, defineComponent } from 'vue'
import { Tour } from '../dist/'
import { data } from 'tour-component/demo/'

const App = defineComponent({
  data: () => {
    return {
      data,
    }
  },
  computed: {
    tourIsVisible(): boolean {
      return this.data.index >= 0 && this.data.index < this.data.steps.length
    },
  },
  methods: {
    deleteValue() {
      localStorage.removeItem(data.localStorageKey)
      this.update(0)
    },
    update(index: number) {
      this.data.index = index
    },
  },
  template: `
    <div>
        <a href="https://github.com/plantain-00/tour-component/tree/master/packages/vue/demo" target="_blank">the source code of the demo</a>
        <br/>
        <tour :data="data"
            v-if="tourIsVisible"
            @update="update($event)">
        </tour>
        <button @click="deleteValue()">delete the value in localstorage</button>
        <div id="step_1" style="position: absolute; left: 10px; top: 210px; width: 200px; height: 100px; line-height: 100px; text-align: center;">step 1 target</div>
        <div id="step_2" style="position: absolute; left: 310px; top: 10px; width: 200px; height: 100px; line-height: 100px; text-align: center;">step 2 target</div>
        <div id="step_3" style="position: absolute; right: 80px; top: 150px; width: 200px; height: 100px; line-height: 100px; text-align: center;">step 3 target</div>
        <div id="step_4" style="position: absolute; right: 430px; top: 800px; width: 200px; height: 100px; line-height: 100px; text-align: center;">step 4 target</div>
    </div>
    `
})

const app = createApp(App)
app.component('tour', Tour)
app.mount('#container')
