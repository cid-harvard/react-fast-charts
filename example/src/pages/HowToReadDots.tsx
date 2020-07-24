import React from 'react';
import { Content } from '../styling/Grid';
import {
  TwoColumnSection,
  SectionHeader,
  Code,
} from '../styling/styleUtils';
import {HowToReadDots} from 'react-fast-charts';

const codeAsString = `import {HowToReadDots} from 'react-fast-charts';


...


<HowToReadDots
  items={[
    {
      label: 'Dot 1',
      color: 'rgba(138,83,150,0.5)',
    },
    {
      label: 'Dot 2',
      color: 'rgba(50,122,118,0.5)',
    },
  ]}
  highlighted={{
    label: 'Dot 2',
    color: 'rgba(50,122,118,0.5)',
  }}
/>
`;

export default () => {
  return (
    <Content>
      <TwoColumnSection>
        <SectionHeader>How To Read Dots</SectionHeader>
        <div style={{maxWidth: 250}}>
          <HowToReadDots
            items={[
              {
                label: 'Dot 1',
                color: 'rgba(138,83,150,0.5)',
              },
              {
                label: 'Dot 2',
                color: 'rgba(50,122,118,0.5)',
              },
            ]}
            highlighted={{
              label: 'Dot 2',
              color: 'rgba(50,122,118,0.5)',
            }}
          />
        </div>
        <div>
          <Code>
            {codeAsString}
          </Code>
        </div>
      </TwoColumnSection>
    </Content>
  );
};

