# react-fast-charts

> react-fast-charts utilizes the power of D3 to quickly create powerful, customizable charts in React. It is an opinionated library that was built for the [Harvard Growth Lab Digital Hub](https://growthlab.app/) in order to build reusable data visualizations across a broad spectrum of use cases.

[![NPM](https://img.shields.io/npm/v/react-fast-charts.svg)](https://www.npmjs.com/package/react-fast-charts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### [View live examples ↗](https://cid-harvard.github.io/react-fast-charts/#/)

## Install

```bash
npm install --save react-fast-charts
```

## Usage


  - [Data Visualizations](#datavizcomponent)
    - [VizType.ScatterPlot](#viztypescatterplot)
    - [VizType.BarChart](#viztypebarchart)
    - [VizType.ClusterBarChart](#viztypeclusterbarchart)
    - [VizType.RadarChart](#viztyperadarchart)
    - [VizType.GeoMap](#viztypegeomap)
    - [VizType.LineChart](#viztypelinechart)
    - [VizType.TreeMap](#viztypetreemap)
    - [VizType.StackChart](#viztypestackchart)
    - [VizType.ClusterChart](#viztypeclusterchart)
    - [VizType.BoxAndWhiskersChart](#viztypeboxandwhiskerschart)
    - [VizType.Error](#errorviz)
  - [Legends and Scales](#legendsandscale)
    - [ColorScaleLegend](#colorscalelegend)
    - [HorizontalLegend](#horizontallegend)
    - [HowToReadDots](#howtoreaddots)
    - [Legend](#legend)


<a name="datavizcomponent"/>

### Data Visualizations

The primary component exported is the DataViz component. It is a single component that takes a number of configurable props to create any of the visualizations supported in this library. All DataViz components takes in a 2 required props and a handful of optional props. Additionally, depending on the `vizType` specified, a number of other optional and required props will be taken.

```tsx
import DataViz, {VizType} from 'react-fast-charts';

...

const App = () => {
  return (
    <DataViz
      id={'example-data-viz'}
      vizType={VizType.LineChart}
      data={data}
    />
  );
};

```
___

#### Required base properties:

- **id**: `string` A unique id for the visualization.
- **vizType**: `VizType | string` The string name for the type of visualization being rendered. Can also export the `VizType` enum from the module from proper type restrictions of available visualization types

```tsx
enum VizType {
  ScatterPlot = 'ScatterPlot',
  BarChart = 'BarChart',
  ClusterBarChart = 'ClusterBarChart',
  RadarChart = 'RadarChart',
  GeoMap = 'GeoMap',
  LineChart = 'LineChart',
  TreeMap = 'TreeMap',
  StackChart = 'StackChart',
  ClusterChart = 'ClusterChart',
  BoxAndWhiskersChart = 'BoxAndWhiskersChart',
  Error = 'Error',
}
```

#### Optional base properties:

- **jsonToDownload** *(optional)*: `object[]` Displays 'Download Data' button under the visualization and allows the user to download the given data as a CSV
- **enablePNGDownload** *(optional)*: `boolean` Displays 'Download PNG' button under the visualization and allows the user to download the given visualization as a PNG
- **enableSVGDownload** *(optional)*: `boolean` Displays 'Download SVG' button under the visualization and allows the user to download the given visualization as a SVG 
- **chartTitle** *(optional)*: `string` The optional chart title is used only if one of the above download features is enabled. The chart title replaces the generic text used for the file name if the user downloads an image or csv.
- **chartCaption** *(optional)*: `string` Places a caption under the chart
- **rootStyles** *(optional)*: `React.CSSProperties` Define any custom style overrides for the root containing div of the visualization
- **height** *(optional)*: `number | string` Define an optional height to override the default sizing of the chart *(default: 450px)*
- **labelFont** *(optional)*: `string` Define an optional font for the labels on the chart
- **triggerGoogleAnalyticsEvent** *(optional)*: `(category: string, action: string, label (optional): string, value (optional): number) => void` Optionally trigger a GA Event every time a user clicks one of the optional download data/image buttons

___

<a name="viztypescatterplot"/>

#### VizType.ScatterPlot

[View live example ↗](https://cid-harvard.github.io/react-fast-charts/#/ScatterPlot)

- **data**: `ScatterPlotDatum[]`
    - **label**: `string`
    - **x**: `number`
    - **y**: `number`
    - **fill** *(optional)*: `string`
    - **radius** *(optional)*: `number`
    - **tooltipContent** *(optional)*: `string`
    - **tooltipContentOnly** *(optional)*: `boolean`
    - **onClick** *(optional)*: `() => void`
    - **highlighted** *(optional)*: `boolean`
- **axisLabels** *(optional)*: `object`
    - **left** *(optional)*: `string`
    - **bottom** *(optional)*: `string`
- **axisMinMax** *(optional)*: `object`
    - **minX** *(optional)*: `number`
    - **maxX** *(optional)*: `number`
    - **minY** *(optional)*: `number`
    - **maxY** *(optional)*: `number`
- **showAverageLines** *(optional)*: `boolean`
- **averageLineText** *(optional)*: `object`
    - **left** *(optional)*: `string`
    - **bottom** *(optional)*: `string`
- **quadrantLabels** *(optional)*: `object`
    - **I** *(optional)*: `string`
    - **II** *(optional)*: `string`
    - **III** *(optional)*: `string`
    - **IV** *(optional)*: `string`

<a name="viztypebarchart"/>

#### VizType.BarChart

[View live example ↗](https://cid-harvard.github.io/react-fast-charts/#/BarChart)

- **data**: `BarChartDatum[][]`
    - **x**: `string`
    - **y**: `number`
    - **fill** *(optional)*: `string`
    - **stroke** *(optional)*: `string`
    - **tooltipContent** *(optional)*: `string`
    - **tooltipContentOnly** *(optional)*: `boolean`
    - **onClick** *(optional)*: `() => void`
- **axisLabels** *(optional)*: `object`
    - **left** *(optional)*: `string`
    - **bottom** *(optional)*: `string`
- **axisMinMax** *(optional)*: `object`
    - **minY** *(optional)*: `number`
    - **maxY** *(optional)*: `number`
- **hideAxis** *(optional)*: `object`
    - **left** *(optional)*: `boolean`
    - **bottom** *(optional)*: `boolean`
- **averageLines** *(optional)*: `object[]`
    - **value**: `number`
    - **label** *(optional)*: `string`
    - **labelPlacement** *(optional)*: `LabelPlacement` enum can be exported from the module. Values are `left` or `right`
    - **strokeWidth** *(optional)*: `number`
    - **strokeDasharray** *(optional)*: `number`
    - **strokeColor** *(optional)*: `string`

<a name="viztypeclusterbarchart"/>

#### VizType.ClusterBarChart

[View live example ↗](https://cid-harvard.github.io/react-fast-charts/#/ClusterBarChart)

- **data**: `ClusterBarChartDatum[]`
    - **groupName**: `string`
    - **x**: `string`
    - **y**: `number`
    - **fill** *(optional)*: `string`
    - **tooltipContent** *(optional)*: `string`
    - **tooltipContentOnly** *(optional)*: `boolean`
    - **onClick** *(optional)*: `() => void`
- **axisLabels** *(optional)*: `object`
    - **left** *(optional)*: `string`
    - **bottom** *(optional)*: `string`

<a name="viztyperadarchart"/>

#### VizType.RadarChart

[View live example ↗](https://cid-harvard.github.io/react-fast-charts/#/RadarChart)

- **data**: `RadarChartDatum[][]`
- **color**: `object`
    - **start**: `string`
    - **end**: `string`
- **maxValue**: `number`

<a name="viztypegeomap"/>

#### VizType.GeoMap

[View live example ↗](https://cid-harvard.github.io/react-fast-charts/#/GeoMap)

- **data**: `ExtendedFeature<any, GeoJsonCustomProperties>`: This is a standard GeoJson object but the `properties` of each feature should include the following props:
    - **percent**: `number`
    - **tooltipContent** *(optional)*: `string`
- **minColor**: `string`
- **maxColor**: `string`

<a name="viztypelinechart"/>

#### VizType.LineChart

[View live example ↗](https://cid-harvard.github.io/react-fast-charts/#/LineChart)

- **data**: `LineChartDatum[]`
    - **coords**: `Coords[]` each `Coord` is an object of `{x: number; y: number}`
    - **animationDuration** *(optional)*: `number`
    - **animationDirection** *(optional)*: `AnimationDirection` enum can be exported from the module. Values are `forward` or `backward`
    - **animationStartIndex** *(optional)*: `number` the index corresponding to the `coord` at which to start the animation
    - **label** *(optional)*: `string`
    - **labelColor** *(optional)*: `string`
    - **showLabelLine** *(optional)*: `boolean`
    - **labelPosition** *(optional)*: `LabelPosition` enum can be exported from the module. Values are `top`, `center` or `bottom`
    - **labelAnchor** *(optional)*: `LabelAnchor` enum can be exported from the module. Values are `start`, `middle` or `end`
    - **labelDataIndex** *(optional)*: `number` the index corresponding to the `coord` at which to place the label
    - **color** *(optional)*: `string`
    - **width** *(optional)*: `number`
    - **tooltipContent**?: `string`
- **axisLabels** *(optional)*: `object`
    - **left** *(optional)*: `string`
    - **bottom** *(optional)*: `string`
- **axisMinMax** *(optional)*: `object`
    - **minX** *(optional)*: `number`
    - **maxX** *(optional)*: `number`
    - **minY** *(optional)*: `number`
    - **maxY** *(optional)*: `number`
- **showGridLines** *(optional)*: `object`
    - **xAxis** *(optional)*: `boolean`
    - **yAxis** *(optional)*: `boolean`
- **formatAxis** *(optional)*: `object`
    - **x** *(optional)*: `(n: number) => string`
    - **y** *(optional)*: `(n: number) => string`
- **tickCount** *(optional)*: `object`
    - **x** *(optional)*: `number`
    - **y** *(optional)*: `number`
- **animateAxis** *(optional)*: `object`
    - **animationDuration**: `number`
    - **startMinX**: `number`
    - **startMaxX**: `number`
    - **startMinY**: `number`
    - **startMaxY**: `number`

<a name="viztypetreemap"/>

#### VizType.TreeMap

[View live example ↗](https://cid-harvard.github.io/react-fast-charts/#/TreeMap)

- **data**: `RootDatum[]`
    - **id**: `string`
    - **label**: `string`
    - **fill** *(optional)*: `string`
    - **children**: `(LeafDatum | RootDatum)[]` array of `RootDatum` or `LeafDatum` elements, where a `LeafDatum` looks like:
        - **id**: `string`
        - **label**: `string`
        - **tooltipContent**: `string`
        - **size**: `number`

<a name="viztypestackchart"/>

#### VizType.StackChart

[View live example ↗](https://cid-harvard.github.io/react-fast-charts/#/StackChart)

- **config**: `StackChartConfig`
    - **primaryKey**: `string` the name of the key to use for plotting the chart on the X axis
    - **groups**: `object[]`
        - **key**: `string`
        - **label**: `string`
        - **fill** *(optional)*: `string`
- **data**: `StackChartDatum[]`
    - **[key: string]**: `number` the data can be any consistent combination of key/value pairs. One of the keys must match the primary key, and the other keys must match the key of a group defined in the `config` prop
- **enableBrushZoom** *(optional)*: `boolean` if true, users can click and drag to zoom into areas of the stack chart. Note that this will also disable tooltips.

<a name="viztypeclusterchart"/>

#### VizType.ClusterChart

[View live example ↗](https://cid-harvard.github.io/react-fast-charts/#/ClusterChart)

- **data**: `ClusterChartDatum[]`
    - **name**: `string`
    - **label**: `string`
    - **value**: `number`
    - **fill**: `string`
    - **tooltipContent** *(optional)*: `string`
- **hideLabels** *(optional)*: `boolean`
- **circleSpacing** *(optional)*: `number`
- **max** *(optional)*: `number`

<a name="viztypeboxandwhiskerschart"/>

#### VizType.BoxAndWhiskersChart

[View live example ↗](https://cid-harvard.github.io/react-fast-charts/#/BoxAndWhiskersChart)

- **data**: `BoxAndWhiskersChartDatum[]`
    - **category**: `string`
    - **label**: `string`
    - **value**: `number`
    - **plotPoint**: `boolean`
    - **primaryPoint**: `boolean`
    - **fill** *(optional)*: `string`

<a name="errorviz"/>

#### VizType.Error

[View live example ↗](https://cid-harvard.github.io/react-fast-charts/#/Error)

The error VizType is useful for quickly setting an error message in place of a visualization if needed.

- **message**: `string`

<a name="legendsandscale"/>

### Legends and Scales

react-fast-charts also exports a number of lightweight legend and scale components to quickly add context to a chart.

```tsx
import {Legend} from 'react-fast-charts';

...

const App = () => {
  return (
      <Legend
        legendList={[
          {label: 'Imports', fill: 'red', stroke: undefined},
          {label: 'Exports', fill: 'blue', stroke: undefined},
        ]}
      />
  );
};

```

<a name="colorscalelegend"/>

#### ColorScaleLegend

[View live example ↗](https://cid-harvard.github.io/react-fast-charts/#/ColorScaleLegend)

The ColorScaleLegend will render a gradient legend. It must receive *either* a `maxColor` and `minColor` *or* a `gradientString`.

- **title**: `string`
- **maxLabel**: `string | number`
- **minLabel**: `string | number`
- **rootStyles** *(optional)*: `React.CSSProperties` define any custom style overrides for the root containing div
- **maxColor** *(optional)*: `string` maximum color for a linear scale
- **minColor** *(optional)*: `string` minimum color for a linear scale
- **gradientString** *(optional)*: `string` custom gradient css string

<a name="horizontallegend"/>

#### HorizontalLegend

[View live example ↗](https://cid-harvard.github.io/react-fast-charts/#/HorizontalLegend)

- **legendList**: `LegendDatum[]`
    - **label**: `string`
    - **fill**: `string | undefined`
    - **stroke**: `string | undefined`
- **rootStyles** *(optional)*: `React.CSSProperties` define any custom style overrides for the root containing div
- **itemStyles** *(optional)*: `React.CSSProperties` define any custom style overrides for the containing div of each item
- **labelStyles** *(optional)*: `React.CSSProperties` define any custom style overrides for each label

<a name="howtoreaddots"/>

#### HowToReadDots

[View live example ↗](https://cid-harvard.github.io/react-fast-charts/#/HowToReadDots)

- **items**: `LegendItem[]`
    - **color**: `string`
    - **label**: `string`
- **highlighted** *(optional)*: `LegendItem` optionally add a highlighted value to distinguish it from the other values.

<a name="legend"/>

#### Legend

[View live example ↗](https://cid-harvard.github.io/react-fast-charts/#/Legend)

- **legendList**: `LegendDatum[]`
    - **label** `string`
    - **fill** `string | undefined`
    - **stroke** `string | undefined`

## License

MIT © [The President and Fellows of Harvard College](https://www.harvard.edu/)
