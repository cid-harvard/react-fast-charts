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
  RadarChartDatum,
} from 'react-fast-charts';

const data: RadarChartDatum[][] = [
  [
    {
      label: 'Point 1',
      value: 6,
    },
    {
      label: 'Point 2',
      value: 4,
    },
    {
      label: 'Point 3',
      value: 8,
    },
    {
      label: 'Point 4',
      value: 9,
    },
    {
      label: 'Point 5',
      value: 3,
    },
  ],
  [
    {
      label: 'Point 1',
      value: 3,
    },
    {
      label: 'Point 2',
      value: 7,
    },
    {
      label: 'Point 3',
      value: 6,
    },
    {
      label: 'Point 4',
      value: 5,
    },
    {
      label: 'Point 5',
      value: 8,
    },
  ],
];

const codeAsString = `import DataViz, {
  VizType,
  RadarChartDatum,
} from 'react-fast-charts';


...


<DataViz
  id={'example-radar-chart'}
  vizType={VizType.RadarChart}
  color={{start: 'blue', end: 'red'}}
  maxValue={10}
  data={data}
/>
`;

const dataAsString = `
const data: RadarChartDatum[][] = [
  [
    {
      label: 'Point 1',
      value: 6,
    },
    {
      label: 'Point 2',
      value: 4,
    },
    {
      label: 'Point 3',
      value: 8,
    },
    {
      label: 'Point 4',
      value: 9,
    },
    {
      label: 'Point 5',
      value: 3,
    },
  ],
  [
    {
      label: 'Point 1',
      value: 3,
    },
    {
      label: 'Point 2',
      value: 7,
    },
    {
      label: 'Point 3',
      value: 6,
    },
    {
      label: 'Point 4',
      value: 5,
    },
    {
      label: 'Point 5',
      value: 8,
    },
  ],
];
`;

export default () => {
  return (
    <Content>
      <TwoColumnSection>
        <SectionHeader>Radar Chart</SectionHeader>
          <DataViz
            id={'example-radar-chart'}
            vizType={VizType.RadarChart}
            color={{start: 'blue', end: 'red'}}
            maxValue={10}
            data={data}
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

