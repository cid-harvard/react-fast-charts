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
  LineChartDatum,
  LabelPosition,
  LabelAnchor,
} from 'react-fast-charts';

const data: LineChartDatum[] = [
  {
    coords: [
      {x: 2005, y: 5},
      {x: 2006, y: 6},
      {x: 2007, y: 8},
      {x: 2008, y: 6},
      {x: 2009, y: 5},
      {x: 2010, y: 9},
      {x: 2011, y: 8},
      {x: 2012, y: 7},
      {x: 2013, y: 6},
      {x: 2014, y: 5},
      {x: 2015, y: 5},
      {x: 2016, y: 8},
    ],
    animationDuration: 0,
    label: 'Green',
    color: 'forestgreen',
    labelColor: 'purple',
    width: 3,
    labelPosition: LabelPosition.Top,
    labelAnchor: LabelAnchor.Middle,
  }, {
    coords: [
      {x: 2005, y: 2},
      {x: 2006, y: 4},
      {x: 2007, y: 5},
      {x: 2008, y: 3},
      {x: 2009, y: 6},
      {x: 2010, y: 5},
      {x: 2011, y: 4},
      {x: 2012, y: 3},
      {x: 2013, y: 3},
      {x: 2014, y: 4},
      {x: 2015, y: 6},
      {x: 2016, y: 7},
    ],
    animationDuration: 1000,
    label: 'Salmon',
    color: 'darksalmon',
    labelColor: 'purple',
    width: 3,
    labelPosition: LabelPosition.Center,
    labelAnchor: LabelAnchor.Left,
  }
];

const codeAsString = `import DataViz, {
  VizType,
  LineChartDatum,
  LabelPosition,
  LabelAnchor,
} from 'react-fast-charts';


...


<DataViz
  id={'example-line-chart'}
  vizType={VizType.LineChart}
  data={data}
  axisLabels={{left: 'Value', bottom: 'Year'}}
  axisMinMax={{
    minY: -10,
    maxY: 20,
    maxX: 2021,
  }}
  formatAxis={{
    x: n => n.toString()
  }}
/>
`;

const dataAsString = `

const data: LineChartDatum[] = [
  {
    coords: [
      {x: 2005, y: 5},
      {x: 2006, y: 6},
      {x: 2007, y: 8},
      {x: 2008, y: 6},
      {x: 2009, y: 5},
      {x: 2010, y: 9},
      {x: 2011, y: 8},
      {x: 2012, y: 7},
      {x: 2013, y: 6},
      {x: 2014, y: 5},
      {x: 2015, y: 5},
      {x: 2016, y: 8},
    ],
    animationDuration: 0,
    label: 'Green',
    color: 'forestgreen',
    labelColor: 'purple',
    width: 3,
    labelPosition: LabelPosition.Top,
    labelAnchor: LabelAnchor.Middle,
  }, {
    coords: [
      {x: 2005, y: 2},
      {x: 2006, y: 4},
      {x: 2007, y: 5},
      {x: 2008, y: 3},
      {x: 2009, y: 6},
      {x: 2010, y: 5},
      {x: 2011, y: 4},
      {x: 2012, y: 3},
      {x: 2013, y: 3},
      {x: 2014, y: 4},
      {x: 2015, y: 6},
      {x: 2016, y: 7},
    ],
    animationDuration: 1000,
    label: 'Salmon',
    color: 'darksalmon',
    labelColor: 'purple',
    width: 3,
    labelPosition: LabelPosition.Center,
    labelAnchor: LabelAnchor.Left,
  }
];

`;

export default () => {
  return (
    <Content>
      <TwoColumnSection>
        <SectionHeader>Line Chart</SectionHeader>
        <DataViz
          id={'sandbox-line-chart'}
          vizType={VizType.LineChart}
          data={data}
          axisLabels={{left: 'Value', bottom: 'Year'}}
          axisMinMax={{
            minY: -10,
            maxY: 20,
            maxX: 2021,
          }}
          formatAxis={{
            x: n => n.toString()
          }}
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

