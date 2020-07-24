import React from 'react';
import { Content } from '../styling/Grid';
import {
  TwoColumnSection,
  SectionHeader,
  Code,
} from '../styling/styleUtils';
import {ColorScaleLegend} from 'react-fast-charts';

const codeAsString = `import {ColorScaleLegend} from 'react-fast-charts';


...


<ColorScaleLegend
  title={'Legend Title'}
  minLabel={0}
  maxLabel={100}
  minColor={'red'}
  maxColor={'blue'}
/>
`;

export default () => {
  return (
    <Content>
      <TwoColumnSection>
        <SectionHeader>Color Scale Legend</SectionHeader>
        <ColorScaleLegend
          title={'Legend Title'}
          minLabel={0}
          maxLabel={100}
          minColor={'red'}
          maxColor={'blue'}
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

