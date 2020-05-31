import { ConfigData } from 'file2variable-cli'

export default {
  base: 'packages/vue/src/',
  files: [
    'packages/vue/src/*.template.html'
  ],
  handler: () => ({
    type: 'vue',
    name: 'Tour',
    path: './index'
  }),
  out: 'packages/vue/src/variables.ts'
} as ConfigData
