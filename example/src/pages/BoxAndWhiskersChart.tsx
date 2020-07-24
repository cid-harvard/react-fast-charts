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
  BoxAndWhiskersChartDatum,
} from 'react-fast-charts';

const data: BoxAndWhiskersChartDatum[] = [
  {
    category: '2010',
    label: 'Value 1',
    value: 7,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2010',
    label: 'Value 2',
    value: 5,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2010',
    label: 'Value 3',
    value: 3,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2010',
    label: 'Value 4',
    value: 8,
    plotPoint: true,
    primaryPoint: true,
  },
  {
    category: '2010',
    label: 'Value 5',
    value: 12,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2010',
    label: 'Value 6',
    value: 13,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2010',
    label: 'Value 7',
    value: 9,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2020',
    label: 'Value 1',
    value: 9,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2020',
    label: 'Value 2',
    value: 7,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2020',
    label: 'Value 3',
    value: 6,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2020',
    label: 'Value 4',
    value: 8,
    plotPoint: true,
    primaryPoint: true,
  },
  {
    category: '2020',
    label: 'Value 5',
    value: 18,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2020',
    label: 'Value 6',
    value: 11,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2020',
    label: 'Value 7',
    value: 10,
    plotPoint: true,
    primaryPoint: false,
  },
];

const codeAsString = `import DataViz, {
  VizType,
  BoxAndWhiskersChartDatum,
} from 'react-fast-charts';


...


<DataViz
  id={'example-box-and-whiskers-chart'}
  vizType={VizType.BoxAndWhiskersChart}
  data={data}
/>
`;

const dataAsString = `
const data: BoxAndWhiskersChartDatum[] = [
  {
    category: '2010',
    label: 'Value 1',
    value: 7,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2010',
    label: 'Value 2',
    value: 5,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2010',
    label: 'Value 3',
    value: 3,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2010',
    label: 'Value 4',
    value: 8,
    plotPoint: true,
    primaryPoint: true,
  },
  {
    category: '2010',
    label: 'Value 5',
    value: 12,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2010',
    label: 'Value 6',
    value: 13,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2010',
    label: 'Value 7',
    value: 9,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2020',
    label: 'Value 1',
    value: 9,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2020',
    label: 'Value 2',
    value: 7,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2020',
    label: 'Value 3',
    value: 6,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2020',
    label: 'Value 4',
    value: 8,
    plotPoint: true,
    primaryPoint: true,
  },
  {
    category: '2020',
    label: 'Value 5',
    value: 18,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2020',
    label: 'Value 6',
    value: 11,
    plotPoint: true,
    primaryPoint: false,
  },
  {
    category: '2020',
    label: 'Value 7',
    value: 10,
    plotPoint: true,
    primaryPoint: false,
  },
];
`;

export default () => {
  return (
    <Content>
      <TwoColumnSection>
        <SectionHeader>Box and Whiskers Chart</SectionHeader>
        <DataViz
          id={'example-box-and-whiskers-chart'}
          vizType={VizType.BoxAndWhiskersChart}
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

