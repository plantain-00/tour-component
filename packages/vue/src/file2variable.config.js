module.exports = {
  base: 'packages/vue/src/',
  files: [
    'packages/vue/src/*.template.html'
  ],
  /**
   * @argument {string} file
   */
  handler: file => ({
    type: 'vue',
    name: 'Tour',
    path: './index'
  }),
  out: 'packages/vue/src/variables.ts'
}
