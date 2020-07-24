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
  ClusterBarChartDatum,
} from 'react-fast-charts';

const data: ClusterBarChartDatum[] = [
  {
    x: '2011',
    y: 6,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: '2012',
    y: 9,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: '2013',
    y: 2,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: '2014',
    y: 5,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: '2015',
    y: 8,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: '2016',
    y: 7,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: '2011',
    y: 4,
    fill: 'green',
    groupName: 'Group 2',
  },
  {
    x: '2012',
    y: 7,
    fill: 'green',
    groupName: 'Group 2',
  },
  {
    x: '2013',
    y: 5,
    fill: 'green',
    groupName: 'Group 2',
  },
  {
    x: '2014',
    y: 9,
    fill: 'green',
    groupName: 'Group 2',
  },
  {
    x: '2015',
    y: 3,
    fill: 'green',
    groupName: 'Group 2',
  },
  {
    x: '2016',
    y: 10,
    fill: 'green',
    groupName: 'Group 2',
  },
];

const codeAsString = `import DataViz, {
  VizType,
  ClusterBarChartDatum,
} from 'react-fast-charts';


...


<DataViz
  id={'example-cluster-bar-chart'}
  vizType={VizType.ClusterBarChart}
  data={data}
/>
`;

const dataAsString = `
const data: ClusterBarChartDatum[] = [
  {
    x: '2011',
    y: 6,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: '2012',
    y: 9,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: '2013',
    y: 2,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: '2014',
    y: 5,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: '2015',
    y: 8,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: '2016',
    y: 7,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: '2011',
    y: 4,
    fill: 'green',
    groupName: 'Group 2',
  },
  {
    x: '2012',
    y: 7,
    fill: 'green',
    groupName: 'Group 2',
  },
  {
    x: '2013',
    y: 5,
    fill: 'green',
    groupName: 'Group 2',
  },
  {
    x: '2014',
    y: 9,
    fill: 'green',
    groupName: 'Group 2',
  },
  {
    x: '2015',
    y: 3,
    fill: 'green',
    groupName: 'Group 2',
  },
  {
    x: '2016',
    y: 10,
    fill: 'green',
    groupName: 'Group 2',
  },
];
`;

export default () => {
  return (
    <Content>
      <TwoColumnSection>
        <SectionHeader>Cluster Bar Chart</SectionHeader>
          <DataViz
            id={'example-cluster-bar-chart'}
            vizType={VizType.ClusterBarChart}
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

