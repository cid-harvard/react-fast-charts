import React from 'react';
import { Content } from '../styling/Grid';
import {
  TwoColumnSection,
  SectionHeader,
  Code,
  CenteredCode,
} from '../styling/styleUtils';
import DataViz, {
  VizType,
  ScatterPlotDatum,
} from 'react-fast-charts';

const data: ScatterPlotDatum[] = [
  {
    label: 'Value 1',
    x: 4,
    y: 6,
    fill: 'red',
    radius: 5,
  },
  {
    label: 'Value 2',
    x: 2,
    y: 9,
    fill: 'blue',
    radius: 9,
  },
  {
    label: 'Value 3',
    x: 3,
    y: 2,
    fill: 'blue',
    radius: 5,
  },
  {
    label: 'Value 4',
    x: 7,
    y: 5,
    fill: 'green',
    radius: 9,
  },
  {
    label: 'Value 5',
    x: 5,
    y: 8,
    fill: 'green',
    radius: 5,
    highlighted: true,
  },
  {
    label: 'Value 6',
    x: 6,
    y: 7,
    fill: 'red',
    radius: 12,
  },
];

const codeAsString = `import DataViz, {
  VizType,
  ScatterPlotDatum,
} from 'react-fast-charts';


...


<DataViz
  id={'example-scatterplot'}
  vizType={VizType.ScatterPlot}
  data={data}
  axisLabels={{
    x: 'Bottom Axis', y: 'Left Axis'
  }}
/>
`;

const dataAsString = `
const data: ScatterPlotDatum[] = [
  {
    label: 'Value 1',
    x: 4,
    y: 6,
    fill: 'red',
    radius: 5,
  },
  {
    label: 'Value 2',
    x: 2,
    y: 9,
    fill: 'blue',
    radius: 9,
  },
  {
    label: 'Value 3',
    x: 3,
    y: 2,
    fill: 'blue',
    radius: 5,
  },
  {
    label: 'Value 4',
    x: 7,
    y: 5,
    fill: 'green',
    radius: 9,
  },
  {
    label: 'Value 5',
    x: 5,
    y: 8,
    fill: 'green',
    radius: 5,
    highlighted: true,
  },
  {
    label: 'Value 6',
    x: 6,
    y: 7,
    fill: 'red',
    radius: 12,
  },
];

`;

export default () => {
  return (
    <Content>
      <TwoColumnSection>
        <SectionHeader>Scatter Plot</SectionHeader>
          <DataViz
            id={'example-scatterplot'}
            vizType={VizType.ScatterPlot}
            data={data}
            axisLabels={{x: 'Bottom Axis', y: 'Left Axis'}}
          />
        <div>
          <Code>
            {codeAsString}
          </Code>
        </div>
      </TwoColumnSection>
      <CenteredCode>
        <Code>
          {dataAsString}
        </Code>
      </CenteredCode>
    </Content>
  );
};

