import React from 'react';
import { Content } from '../styling/Grid';
import {
  TwoColumnSection,
  SectionHeader,
  Code,
} from '../styling/styleUtils';
import {HorizontalLegend} from 'react-fast-charts';

const codeAsString = `import {HorizontalLegend} from 'react-fast-charts';


...


<HorizontalLegend
  legendList={[
    {
      label: 'Box 1',
      fill: 'red',
      stroke: undefined,
    },
    {
      label: 'Box 2',
      fill: 'blue',
      stroke: undefined,
    },
    {
      label: 'Box 3',
      fill: 'green',
      stroke: undefined,
    },
  ]}
/>
`;

export default () => {
  return (
    <Content>
      <TwoColumnSection>
        <SectionHeader>Horizontal Legend</SectionHeader>
        <HorizontalLegend
          legendList={[
            {
              label: 'Box 1',
              fill: 'red',
              stroke: undefined,
            },
            {
              label: 'Box 2',
              fill: 'blue',
              stroke: undefined,
            },
            {
              label: 'Box 3',
              fill: 'green',
              stroke: undefined,
            },
          ]}
        />
        <div>
          <Code>
            {codeAsString}
          </Code>
        </div>
      </TwoColumnSection>
    </Content>
  );
};

