import React from 'react';
import { Content } from '../styling/Grid';
import {
  TwoColumnSection,
  SectionHeader,
  Code,
} from '../styling/styleUtils';
import DataViz, {
  VizType,
} from 'react-fast-charts';

const codeAsString = `import DataViz, {
  VizType,
} from 'react-fast-charts';


...


<DataViz
  id={'example-error-message'}
  vizType={VizType.Error}
  message={'There was an error for this chart'}
/>
`;

export default () => {
  return (
    <Content>
      <TwoColumnSection>
        <SectionHeader>Error</SectionHeader>
        <DataViz
          id={'example-error-message'}
          vizType={VizType.Error}
          message={'There was an error for this chart'}
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

