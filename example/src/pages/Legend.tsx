import React from 'react';
import { Content } from '../styling/Grid';
import {
  TwoColumnSection,
  SectionHeader,
  Code,
} from '../styling/styleUtils';
import {Legend} from 'react-fast-charts';

const codeAsString = `import {Legend} from 'react-fast-charts';


...


<Legend
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
        <SectionHeader>Legend</SectionHeader>
        <Legend
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

