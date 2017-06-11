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
+ commonjs module
+ custom component

#### install

`npm i tour-component`

#### link css

```html
<link rel="stylesheet" href="./node_modules/tour-component/dist/tour.min.css" />
```

#### vuejs component demo

`npm i vue vue-class-component`

```ts
import "tour-component/dist/vue";
```

```html
<tour :data="data">
</tour>
```

the online demo: https://plantain-00.github.io/tour-component/demo/vue/index.html

#### reactjs component demo

```ts
import { Tour } from "tour-component/dist/react";
```

```jsx
<Tour data={this.data}>
</Tour>
```

the online demo: https://plantain-00.github.io/tour-component/demo/react/index.html

#### angular component demo

```ts
import { TourComponent } from "tour-component/dist/angular";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [MainComponent, TourComponent],
    bootstrap: [MainComponent],
})
class MainModule { }
```

```html
<tour [data]="data">
</tour>
```

the online demo: https://plantain-00.github.io/tour-component/demo/angular/index.html

#### properties and events of the component

name | type | description
--- | --- | ---
data | [TourData](#tour-data-structure)[] | the data of the tour

#### tour data structure

```ts
type TourData = {
    component: string | Function; // the item component, for vuejs, it is the component name, for reactjs, it is the class object
    data: any; // the data will be passed to the component as `data` props
};
```
