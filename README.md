[![Dependency Status](https://david-dm.org/plantain-00/tour-component.svg)](https://david-dm.org/plantain-00/tour-component)
[![devDependency Status](https://david-dm.org/plantain-00/tour-component/dev-status.svg)](https://david-dm.org/plantain-00/tour-component#info=devDependencies)
[![Build Status: Linux](https://travis-ci.org/plantain-00/tour-component.svg?branch=master)](https://travis-ci.org/plantain-00/tour-component)
[![Build Status: Windows](https://ci.appveyor.com/api/projects/status/github/plantain-00/tour-component?branch=master&svg=true)](https://ci.appveyor.com/project/plantain-00/tour-component/branch/master)
[![npm version](https://badge.fury.io/js/tour-component.svg)](https://badge.fury.io/js/tour-component)
[![Downloads](https://img.shields.io/npm/dm/tour-component.svg)](https://www.npmjs.com/package/tour-component)

# tour-component
A vuejs, reactjs and angular tour component.

#### features

+ vuejs component
+ reactjs component
+ angular component
+ highlight target element
+ scroll to target

#### link css

```html
<link rel="stylesheet" href="./node_modules/tour-component/dist/tour.min.css" />
```

#### vuejs component

`npm i vue-tour-component`

```ts
import "vue-tour-component";
```

```html
<tour :data="data"
    @update="update($event)">
</tour>
```

the online demo: https://plantain-00.github.io/tour-component/packages/vue/demo

#### reactjs component

`npm i react-tour-component`

```ts
import { Tour } from "react-tour-component";
```

```jsx
<Tour data={this.data}
    update={e => this.update(e)}>
</Tour>
```

the online demo: https://plantain-00.github.io/tour-component/packages/react/demo

#### angular component

`npm i angular-tour-component`

```ts
import { TourModule } from "angular/tour-component";

@NgModule({
    imports: [BrowserModule, FormsModule, TourModule],
    declarations: [MainComponent],
    bootstrap: [MainComponent],
})
class MainModule { }
```

```html
<tour [data]="data"
    (update)="update($event)">
</tour>
```

the online demo: https://plantain-00.github.io/tour-component/packages/angular/demo/jit

the AOT online demo: https://plantain-00.github.io/tour-component/packages/angular/demo/aot

#### properties and events of the component

name | type | description
--- | --- | ---
data | [TourData](#tour-data-structure)[] | the data of the tour
update | (index: number)=> void | triggered when press next or close

#### tour data structure

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

#### change log

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

```
// v2 to v3
move `index` into `data` from as a property
```

```
// v1 to v2
move `index` out from `data` as a property
add `update` event
```
