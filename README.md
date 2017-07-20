[![Dependency Status](https://david-dm.org/plantain-00/tour-component.svg)](https://david-dm.org/plantain-00/tour-component)
[![devDependency Status](https://david-dm.org/plantain-00/tour-component/dev-status.svg)](https://david-dm.org/plantain-00/tour-component#info=devDependencies)
[![Build Status](https://travis-ci.org/plantain-00/tour-component.svg?branch=master)](https://travis-ci.org/plantain-00/tour-component)
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

#### install

`npm i tour-component`

#### link css

```html
<link rel="stylesheet" href="./node_modules/tour-component/tour.min.css" />
```

#### vuejs component demo

`npm i vue vue-class-component`

```ts
import "tour-component/vue";
```

```html
<tour :data="data"
    @update="update($event)">
</tour>
```

the online demo: https://plantain-00.github.io/tour-component/demo/vue/index.html

#### reactjs component demo

```ts
import { Tour } from "tour-component/react";
```

```jsx
<Tour data={this.data}
    update={e => this.update(e)}>
</Tour>
```

the online demo: https://plantain-00.github.io/tour-component/demo/react/index.html

#### angular component demo

```ts
import { TourComponent } from "tour-component/angular";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [MainComponent, TourComponent],
    bootstrap: [MainComponent],
})
class MainModule { }
```

```html
<tour [data]="data"
    (update)="update($event)">
</tour>
```

the online demo: https://plantain-00.github.io/tour-component/demo/angular/index.html

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
