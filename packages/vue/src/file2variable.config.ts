import { Configuration } from 'file2variable-cli'

const config: Configuration = {
  base: 'packages/vue/src/',
  files: [
    'packages/vue/src/*.template.html'
  ],
  handler: () => ({
    type: 'vue3',
  }),
  out: 'packages/vue/src/variables.ts'
}

export default config
