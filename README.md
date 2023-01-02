# vue-heatmap


VueJs 2 component for heatmap visualization.  <br>
Wrapper for [heatmapjs](https://www.patrick-wied.at/static/heatmapjs/) library.<br>
[Project with an example of use](https://github.com/vasichmen/pvmonitor)

### Install

```npm i @vasichmen/vue-heatmap```

```javascript
import VueHeatmap from '@vasichmen/vue-heatmap';
...
Vue.use(VueHeatmap);
```

### Example

```vue

<template>
  <vue-heatmap
      :point-data="heatmapData"
      :point-radius="30"
  >
    <template #default>
      <div
          class="map"
          style="height:300px; width:300px"
      >
      </div>
    </template>
  </vue-heatmap>
</template>

<script>
export default {
  data: () => {
    return {
      heatmapData: {
        data: [
          {
            x: 100,
            y: 100,
            value: 50,
          },
          {
            x: 150,
            y: 150,
            value: 80,
          },
          {
            x: 200,
            y: 200,
            value: 20,
          },
          {
            x: 200,
            y: 100,
            value: 100,
          },
        ],
        max: 100,
        min: 10,
      },
    };
  },
};

</script>
```

### Props

| name         | type    | default                                                                                                        | description                                                 |
|--------------|---------|----------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| point-data   | object  |                                                                                                                | heatmap data to visualize                                   |
| point-radius | number  | 9                                                                                                              | capture radius of a single point                            |
| max-opacity  | number  | 0.2                                                                                                            | 0 .. 1                                                      |
| min-opacity  | number  | 0                                                                                                              | 0 .. 1                                                      |
| blur         | number  | 0.9                                                                                                            | 0 .. 1, the degree of blurring of point boundaries          |
| gradient     | object  | {<br/>0.25: 'rgb(0,0,255)', <br/>0.55: 'rgb(0,255,0)',<br/>0.85: 'yellow',<br/>1.0: 'rgb(255,0,0)',<br/>}<br/> | heatmap gradient parameters                                 |
| x-field      | string  | x                                                                                                              | field name of point-data.data array object for x coordinate |
| y-field      | string  | y                                                                                                              | field name of point-data.data array object for y coordinate |
| value-field  | string  | value                                                                                                          | field name of point-data.data array object for value        |
| is-visible   | boolean | true                                                                                                           | determines if heatmap is visible                            |

