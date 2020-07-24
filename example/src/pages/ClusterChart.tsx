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
  ClusterChartDatum,
} from 'react-fast-charts';

const data: ClusterChartDatum[] = [
  {
    name: 'Value 1',
    label: 'Value 1',
    value: 78,
    fill: 'green',
  },
  {
    name: 'Value 2',
    label: 'Value 2',
    value: 67,
    fill: 'orange',
  },
  {
    name: 'Value 3',
    label: 'Value 3',
    value: 48,
    fill: 'pink',
  },
  {
    name: 'Value 4',
    label: 'Value 4',
    value: 39,
    fill: 'red',
  },
  {
    name: 'Value 5',
    label: 'Value 5',
    value: 69,
    fill: 'brown',
  },
  {
    name: 'Value 6',
    label: 'Value 6',
    value: 24,
    fill: 'salmon',
  },
];

const codeAsString = `import DataViz, {
  VizType,
  ClusterChartDatum,
} from 'react-fast-charts';


...


<DataViz
  id={'example-cluster-chart'}
  vizType={VizType.ClusterChart}
  data={data}
/>
`;

const dataAsString = `
const data: ClusterChartDatum[] = [
  {
    name: 'Value 1',
    label: 'Value 1',
    value: 78,
    fill: 'green',
  },
  {
    name: 'Value 2',
    label: 'Value 2',
    value: 67,
    fill: 'orange',
  },
  {
    name: 'Value 3',
    label: 'Value 3',
    value: 48,
    fill: 'pink',
  },
  {
    name: 'Value 4',
    label: 'Value 4',
    value: 39,
    fill: 'red',
  },
  {
    name: 'Value 5',
    label: 'Value 5',
    value: 69,
    fill: 'brown',
  },
  {
    name: 'Value 6',
    label: 'Value 6',
    value: 24,
    fill: 'salmon',
  },
];
`;

export default () => {
  return (
    <Content>
      <TwoColumnSection>
        <SectionHeader>Cluster Chart</SectionHeader>
          <DataViz
            id={'example-cluster-chart'}
            vizType={VizType.ClusterChart}
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

