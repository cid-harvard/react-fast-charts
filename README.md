# react-fast-charts

> Quickly create a variety of data visualizations in React using D3.

[![NPM](https://img.shields.io/npm/v/react-fast-charts.svg)](https://www.npmjs.com/package/react-fast-charts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-fast-charts
```

## Usage

  - [DataViz](#datavizcomponent)
  - [LegendList](#legendlistcomponent)
  - [HowToReadDots](#howtoreaddotscomponent)
  - [ColorScaleLegend](#colorlegendcomponent)


<a name="datavizcomponent"/>

#### DataViz

The data viz component, located at `src/components/dataViz` is the catch-all for any data visualizations. Below are the different props the DataViz component can take in.

- **id**: string

   A unique id for the visualization. Make sure that this is unique not only for this page, but across all pages as it will be used for Google Analytics Event tracking. Consider prefixing all your ids with a unique, page specific identifier.

- **jsonToDownload** *(optional)*: object[]

   An array of objects. Each object in the array should be the same shape. If this is provided it will show the "Download Data" button under the visualization and allow the user to download the data in CSV format.

- **enablePNGDownload** *(optional)*: boolean
  
   Set this to `true` to enable the "Download PNG" button and functionality.

- **enableSVGDownload** *(optional)*: boolean

   Set this to `true` to enable the "Download SVG" button and functionality.

- **chartTitle** *(optional)*: string

   The optional chart title is used only if one of the above download features is enabled. The chart title replaces the generic text used for the file name if the user downloads an image or csv.

- **vizType**: VizType

   VizType is an enum also exported from `src/components/dataViz`. Depending on the type, there are a number of additional props required, shown below. It can be of the following types -

   ```tsx
   enum VizType {
      ScatterPlot = 'ScatterPlot',
      BarChart = 'BarChart',
      ClusterBarChart = 'ClusterBarChart',
      RadarChart = 'RadarChart',
      GeoMap = 'GeoMap',
    }
   ```
   - **VizType.ScatterPlot**

      **data**: ScatterPlotDatum[];

         ScatterPlotDatum takes the following values:

         - label: string;
         - x: number;
         - y: number;
         - fill *(optional)*: string;
         - radius*(optional)*: number;
         - tooltipContent *(optional)*: string;
         - tooltipContentOnly *(optional)*: boolean;
         - highlighted *(optional)*: boolean;

      **axisLabels** *(optional)*: {**left** *(optional)*: string, **bottom** *(optional)*: string};

      **axisMinMax** *(optional)*: {

         **minX** *(optional)*: number,

         **maxX** *(optional)*: number,

         **minY** *(optional)*: number,

         **maxY** *(optional)*: number,

      };

      **showAverageLines** *(optional)*: boolean;

      **averageLineText** *(optional)*: {**left** *(optional)*: string, **bottom** *(optional)*: string};


   - **VizType.BarChart**

      **data**: Array<BarChartDatum[]>;

         BarChartDatum takes the following values:

         - x: string;
         - y: number;
         - fill *(optional)*: string;
         - stroke *(optional)*: string;
         - tooltipContent *(optional)*: string;
         - tooltipContentOnly *(optional)*: boolean;

         The data it takes is an array of BarChartDatum arrays. Each array will render ontop of the previous one.

      **axisLabels** *(optional)*: {**left** *(optional)*: string, **bottom** *(optional)*: string};

      **quadrantLabels** *(optional)*: {**I** *(optional)*: string, **II** *(optional)*: string, **III** *(optional)*: string, **IV** *(optional)*: string};

         Use the new line escape character, `\n`, to indicate when the label text should break to a new line.

   - **VizType.RadarChart**

      **data**: RadarChartDatum[];

         RadarChartDatum takes the following values:

         - label: string;
         - value: number;

         To include multi-line labels, include a newline character, \n, to indicate a new line.

      **maxValue**: number;

         Radar charts require a max value at which to compare each individual datums values against.

      **axisLabels** *(optional)*: {**left** *(optional)*: string, **bottom** *(optional)*: string};

         Use the new line escape character, `\n`, to indicate when the label text should break to a new line.

   - **VizType.GeoMap**

      **data**: ExtendedFeature<any, GeoJsonCustomProperties>;

         ExtendedFeature is a standard GeoJson object but it requires the following values to be appended within the `.features` data:

         - percent: number; *(Number between 0 and 100)*
         - tooltipContent *(optional)*: string;

      **minColor**: string;

      **maxColor**: string;


   - **VizType.ClusterBarChart**

      **data**: ClusterBarChartDatum[];

         ClusterBarChartDatum takes the following values:

         - groupName: string;
         - x: string;
         - y: number;
         - fill?: string;
         - tooltipContent?: string;
         - tooltipContentOnly *(optional)*: boolean;

         Each x value will create a cluster of every groupName that has a matching x value.

      **axisLabels** *(optional)*: {**left** *(optional)*: string, **bottom** *(optional)*: string};

Example of the DataViz component -

```tsx
<DataViz
  id={'time-is-money-scatterplot'}
  vizType={VizType.ScatterPlot}
  data={scatterplotData}
  axisLabels={{bottom: 'Time', left: 'Dollars'}}
  enablePNGDownload={true}
  enableSVGDownload={true}
  chartTitle={'Time is Money'}
  jsonToDownload={rawData}
/>
```

<a name="legendlistcomponent"/>

#### LegendList

The Legend component, located at `src/components/dataViz/Legend` is for displaying a basic color block based legend. The Legend component only takes a single prop -

- **legendList**: LegendDatum[]

   Each LegendDatum will be rendered as a separate block. It has the following properties -

   - **label**: string;
   - **fill**: string | undefined;
   - **stroke**: string | undefined;

<a name="howtoreaddotscomponent"/>

#### HowToReadDots

The HowToReadDots component, located at `src/components/dataViz/HowToReadDots` is for displaying a basic color circle based legend. The HowToReadDots component takes two props -

- **items**: LegendItem[]

   Each LegendItem will be rendered as a separate dot. It has the following properties -

   - **label**: string;
   - **color**: string;

- **highlighted** *(Optional)*: LegendItem

   Optionally add a highlighted value to distinguish it from the other values.

<a name="colorlegendcomponent"/>

#### ColorScaleLegend

The ColorScaleLegend component, located at `src/components/dataViz/ColorScaleLegend` is for displaying a color range scale. The ColorScaleLegend component takes the following props -

- **maxColor**: string;
- **minColor**: string;
- **title**: string;
- **maxLabel**: string | number;
- **minLabel**: string | number;


## License

MIT © [wsoeltz](https://github.com/wsoeltz)
