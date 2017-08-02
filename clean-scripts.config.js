module.exports = {
  build: [
    `rimraf rimraf demo/**/index.bundle-*.js demo/*.bundle-*.css`,
    `rimraf dist`,
    `file2variable-cli src/vue.template.html -o src/vue-variables.ts --html-minify --base src`,
    `file2variable-cli src/angular.template.html -o src/angular-variables.ts --html-minify --base src`,
    `tsc -p src`,
    `tsc -p demo`,
    `lessc src/tour.less > dist/tour.css`,
    `cleancss -o dist/tour.min.css dist/tour.css`,
    `cleancss -o demo/index.bundle.css dist/tour.min.css ./node_modules/github-fork-ribbon-css/gh-fork-ribbon.css`,
    `webpack --display-modules --config demo/webpack.config.js`,
    `rev-static --config demo/rev-static.config.js`
  ],
  lint: [
    `tslint "src/**/*.ts" "src/**/*.tsx" "demo/**/*.ts" "demo/**/*.tsx"`,
    `standard "**/*.config.js"`,
    `stylelint "src/**/*.less"`
  ],
  test: [
    'tsc -p spec',
    'karma start spec/karma.config.js'
  ],
  fix: [
    `standard --fix "**/*.config.js"`
  ],
  release: [
    `clean-release`
  ]
}
