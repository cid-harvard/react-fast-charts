import React, {useState} from 'react';
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

const data1: ClusterBarChartDatum[] = [
  {
    x: '2011 Extra long title that breaks into the next line',
    y: .06,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: '2012',
    y: .09,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: '2013',
    y: .02,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: 'Godzillakingofthemonsters',
    y: .05,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: 'Manufacturing and Food Processes',
    y: .08,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: '2016',
    y: .07,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: '2011 Extra long title that breaks into the next line',
    y: .04,
    fill: 'green',
    groupName: 'Group 2',
  },
  {
    x: '2012',
    y: .07,
    fill: 'green',
    groupName: 'Group 2',
  },
  {
    x: '2013',
    y: .05,
    fill: 'green',
    groupName: 'Group 2',
  },
  {
    x: 'Godzillakingofthemonsters',
    y: .09,
    fill: 'green',
    groupName: 'Group 2',
  },
  {
    x: 'Manufacturing and Food Processes',
    y: .03,
    fill: 'green',
    groupName: 'Group 2',
  },
  {
    x: '2016',
    y: .010,
    fill: 'green',
    groupName: 'Group 2',
  },
];
const data2: ClusterBarChartDatum[] = [
  {
    x: '1990',
    y: 8,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: '1991',
    y: 10,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: '1993',
    y: 7,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: '1995',
    y: 19,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: '1990',
    y: 6,
    fill: 'green',
    groupName: 'Group 2',
  },
  {
    x: '1991',
    y: 7,
    fill: 'green',
    groupName: 'Group 2',
  },
  {
    x: '1993',
    y: 3,
    fill: 'green',
    groupName: 'Group 2',
  },
  {
    x: '1995',
    y: 20,
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
    x: 'Godzillakingofthemonsters',
    y: 5,
    fill: 'blue',
    groupName: 'Group 1',
  },
  {
    x: 'Manufacturing and Food Processes',
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
    x: 'Godzillakingofthemonsters',
    y: 9,
    fill: 'green',
    groupName: 'Group 2',
  },
  {
    x: 'Manufacturing and Food Processes',
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
  const [dataNumber, setDataNumber] = useState<number>(1);
  const [downloading, setDownloading] = useState<boolean>(false);
  const data = dataNumber === 1 ? data1 : data2;
  const toggleData = () => setDataNumber(curr => curr === 1 ? 2 : 1);
  const triggerPNGDownload = !downloading ? undefined : () => {
    setDownloading(false);
  }
  return (
    <Content>
      <button onClick={toggleData}>Toggle Data</button>
      <button onClick={() => setDownloading(true)}>Trigger download</button>
      <TwoColumnSection>
        <SectionHeader>Cluster Bar Chart</SectionHeader>
          <DataViz
            id={'example-cluster-bar-chart'}
            vizType={VizType.ClusterBarChart}
            data={data}
            animateAxis={{
              animationDuration: 500,
              startMinY: dataNumber === 1 ? 0 : 1,
              startMaxY: dataNumber === 1 ? 20 : 100,
            }}
            animateBars={500}
            axisLabels={{left: 'Title'}}
            enablePNGDownload={true}
            triggerPNGDownload={triggerPNGDownload}
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

