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
} from 'react-fast-charts';
import raw from 'raw.macro';

const codeAsString = `import DataViz, {
  VizType,
} from 'react-fast-charts';


...


<DataViz
  id={'example-geo-map'}
  vizType={VizType.GeoMap}
  data={data}
  minColor={'yellow'}
  maxColor={'red'}
/>
`;

const dataAsString = `
import raw from 'raw.macro';


...


const worldMap = JSON.parse(raw('../assets/world-geojson.json'));
const featuresWithValues = worldMap.features.map((feature: any) => {
  const percent = Math.random() * 100;
  const properties = {
    ...feature.properties,
    percent,
    tooltipContent: \`$\{feature.properties.name}: $\{percent.toFixed(2)}%\`,
  };
  return {...feature, properties};
});
const data = {...worldMap, features: featuresWithValues};
`;

const worldMap = JSON.parse(raw('../assets/world-geojson.json'));
const featuresWithValues = worldMap.features.map((feature: any) => {
  const percent = Math.random() * 100;
  const properties = {
    ...feature.properties,
    percent,
    tooltipContent: `${feature.properties.name}: ${percent.toFixed(2)}%`,
  };
  return {...feature, properties};
});
const data = {...worldMap, features: featuresWithValues};

export default () => {

  return (
    <Content>
      <TwoColumnSection>
        <SectionHeader>GeoMap</SectionHeader>
          <DataViz
            id={'example-geo-map'}
            vizType={VizType.GeoMap}
            data={data}
            minColor={'yellow'}
            maxColor={'red'}
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

