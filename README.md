# tour-component

[![Dependency Status](https://david-dm.org/plantain-00/tour-component.svg)](https://david-dm.org/plantain-00/tour-component)
[![devDependency Status](https://david-dm.org/plantain-00/tour-component/dev-status.svg)](https://david-dm.org/plantain-00/tour-component#info=devDependencies)
[![Build Status: Linux](https://travis-ci.org/plantain-00/tour-component.svg?branch=master)](https://travis-ci.org/plantain-00/tour-component)
[![Build Status: Windows](https://ci.appveyor.com/api/projects/status/github/plantain-00/tour-component?branch=master&svg=true)](https://ci.appveyor.com/project/plantain-00/tour-component/branch/master)
![Github CI](https://github.com/plantain-00/tour-component/workflows/Github%20CI/badge.svg)
[![npm version](https://badge.fury.io/js/tour-component.svg)](https://badge.fury.io/js/tour-component)
[![Downloads](https://img.shields.io/npm/dm/tour-component.svg)](https://www.npmjs.com/package/tour-component)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fplantain-00%2Ftour-component%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/tour-component)

A vuejs and reactjs tour component.

## features

+ vuejs component
+ reactjs component
+ highlight target element
+ scroll to target

## link css

```html
<link rel="stylesheet" href="./node_modules/tour-component/dist/tour.min.css" />
```

## vuejs component

[![gzip size](https://img.badgesize.io/https://unpkg.com/vue-tour-component?compression=gzip)](https://unpkg.com/vue-tour-component)

`npm i vue-tour-component`

```ts
import { Tour } from "vue-tour-component";
app.component('tour', Tour)
```

or

```html
<script src="./node_modules/vue/dist/vue.min.js"></script>
<script src="./node_modules/vue-tour-component/dist/vue-tour-component.min.js"></script>
```

```html
<tour :data="data"
    @update="update($event)">
</tour>
```

the online demo: <https://plantain-00.github.io/tour-component/packages/vue/demo>

## reactjs component

[![gzip size](https://img.badgesize.io/https://unpkg.com/react-tour-component?compression=gzip)](https://unpkg.com/react-tour-component)

`npm i react-tour-component`

```ts
import { Tour } from "react-tour-component";
```

or

```html
<script src="./node_modules/react/umd/react.production.min.js"></script>
<script src="./node_modules/react-dom/umd/react-dom.production.min.js"></script>
<script src="./node_modules/react-tour-component/dist/react-tour-component.min.js"></script>
```

```jsx
<Tour data={this.data}
    update={e => this.update(e)}>
</Tour>
```

the online demo: <https://plantain-00.github.io/tour-component/packages/react/demo>

## properties and events of the component

name | type | description
--- | --- | ---
data | [TourData](#tour-data-structure)[] | the data of the tour
update | (index: number)=> void | triggered when press next or close

## tour data structure

```ts
type TourData = {
    steps: Step[],
    localStorageKey: string;
    index: number;
};

type Step = {
    left?: string | (() => string);
    right?: string | (() => string);
    top?: string | (() => string);
    bottom?: string | (() => string);
    direction: "left" | "right" | "top" | "bottom";
    content: string;
    next: string;
    scrollTop?: number;
    targetElementId?: string;
};
```

## change log

```ts
// v5 vue 2
import 'vue-tour-component'
// v6 vue 3
import { Tour } from "vue-tour-component"
app.component('tour', Tour)
```

```bash
# v5
npm i tour-component

# v6
npm i vue-tour-component
npm i react-tour-component
npm i angular-tour-component
```

```ts
// v5
import "tour-component/vue";
import { Tour } from "tour-component/react";
import { TourModule } from "tour-component/angular";

// v6
import "vue-tour-component";
import { Tour } from "react-tour-component";
import { TourModule } from "angular-tour-component";
```

```html
// v5
<link rel="stylesheet" href="./node_modules/tour-component/tour.min.css" />

// v6
<link rel="stylesheet" href="./node_modules/tour-component/dist/tour.min.css" />
```

```ts
// v4 angular AOT:
import { TourModule } from "tour-component/angular";

// v5 angular AOT:
import { TourModule } from "tour-component/aot/angular";
```

```ts
// v4
import "tour-component/vue";

// v3
import "tour-component/dist/vue";
```

```bash
// v2 to v3
move `index` into `data` from as a property
```

```bash
// v1 to v2
move `index` out from `data` as a property
add `update` event
```
