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
  BarChartDatum,
} from 'react-fast-charts';

const data: BarChartDatum[][] = [
  [
    {
      x: '2011',
      y: 10,
      stroke: 'lightblue',
      fill: 'transparent',
    },
    {
      x: '2012',
      y: 11,
      stroke: 'lightblue',
      fill: 'transparent',
    },
    {
      x: '2013',
      y: 6,
      stroke: 'lightblue',
      fill: 'transparent',
    },
    {
      x: '2014',
      y: 8,
      stroke: 'lightblue',
      fill: 'transparent',
    },
    {
      x: '2015',
      y: 9,
      stroke: 'lightblue',
      fill: 'transparent',
    },
    {
      x: '2016',
      y: 12,
      stroke: 'lightblue',
      fill: 'transparent',
    },
  ],
  [
    {
      x: '2011',
      y: 6,
      fill: 'blue',
    },
    {
      x: '2012',
      y: 9,
      fill: 'blue',
    },
    {
      x: '2013',
      y: 2,
      fill: 'blue',
    },
    {
      x: '2014',
      y: 5,
      fill: 'blue',
    },
    {
      x: '2015',
      y: 8,
      fill: 'blue',
    },
    {
      x: '2016',
      y: 7,
      fill: 'blue',
    },
  ],
];

const codeAsString = `import DataViz, {
  VizType,
  BarChartDatum,
} from 'react-fast-charts';


...


<DataViz
  id={'example-bar-chart'}
  vizType={VizType.BarChart}
  data={data}
  axisLabels={{left: 'Value', bottom: 'Year'}}
/>
`;

const dataAsString = `
const data: BarChartDatum[][] = [
  [
    {
      x: '2011',
      y: 10,
      stroke: 'lightblue',
      fill: 'transparent',
    },
    {
      x: '2012',
      y: 11,
      stroke: 'lightblue',
      fill: 'transparent',
    },
    {
      x: '2013',
      y: 6,
      stroke: 'lightblue',
      fill: 'transparent',
    },
    {
      x: '2014',
      y: 8,
      stroke: 'lightblue',
      fill: 'transparent',
    },
    {
      x: '2015',
      y: 9,
      stroke: 'lightblue',
      fill: 'transparent',
    },
    {
      x: '2016',
      y: 12,
      stroke: 'lightblue',
      fill: 'transparent',
    },
  ],
  [
    {
      x: '2011',
      y: 6,
      fill: 'blue',
    },
    {
      x: '2012',
      y: 9,
      fill: 'blue',
    },
    {
      x: '2013',
      y: 2,
      fill: 'blue',
    },
    {
      x: '2014',
      y: 5,
      fill: 'blue',
    },
    {
      x: '2015',
      y: 8,
      fill: 'blue',
    },
    {
      x: '2016',
      y: 7,
      fill: 'blue',
    },
  ],
];
`;

export default () => {
  return (
    <Content>
      <TwoColumnSection>
        <SectionHeader>Bar Chart</SectionHeader>
          <DataViz
            id={'example-bar-chart'}
            vizType={VizType.BarChart}
            data={data}
            axisLabels={{left: 'Value', bottom: 'Year'}}
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

