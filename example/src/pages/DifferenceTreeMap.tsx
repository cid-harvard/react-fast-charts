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
  RootDatum,
  LeafDatum,
} from 'react-fast-charts';

const primaryData: RootDatum = {
 "id": "example-primary-tree-map-data",
 "label": "Boston",
 "children": [
  {
   "id": "Beverages",
   "label": "Beverages",
   "fill": "#537DAA",
   "children": [
      {
        "id": "Beverages",
        "label": "Beverages",
        "size": 0.5
      }
    ]
   },
  {
   "id": "Chemicals",
   "label": "Chemicals",
   "fill": "#A1CBE7",
   "children": [
      {
        "id": "Chemicals1",
        "label": "Chemicals 1",
        "size": 2
      },
      {
        "id": "Chemicals2",
        "label": "Chemicals 2",
        "size": 2
      },
      {
        "id": "Chemicals3",
        "label": "Chemicals 3",
        "size": 1
      },
      {
        "id": "Chemicals4",
        "label": "Chemicals 4",
        "size": 0.5
      },
      {
        "id": "Chemicals5",
        "label": "Chemicals 5",
        "size": 1
      }
    ]
   },
  {
   "id": "CrudeMaterials",
   "label": "CrudeMaterials",
   "fill": "#F08D34",
   "children": [
      {
        "id": "CrudeMaterials",
        "label": "Crude Materials",
        "size": 1
      }
    ]
   },
  {
   "id": "Food",
   "label": "Food",
   "fill": "#F5BD7D",
   "children": [
      {
        "id": "Fish",
        "label": "Fish",
        "size": 8
      },
      {
        "id": "Poultry",
        "label": "Poultry",
        "size": 8
      }
    ]
   },
  {
   "id": "MachineryandVehicles",
   "label": "Machinery and Vehicles",
   "fill": "#8CD17D",
   "children": [
      {
        "id": "Road",
        "label": "Road",
        "size": 5
      },
      {
        "id": "Cars",
        "label": "Cars",
        "size": 4
      },
      {
        "id": "Trucks",
        "label": "Trucks",
        "size": 3
      },
      {
        "id": "Tires",
        "label": "Tires",
        "size": 1
      },
      {
        "id": "Other",
        "label": "Other",
        "size": 0.5
      }
    ]
   },
  {
   "id": "Material Manufacturers",
   "label": "Material Manufacturers",
   "fill": "#B69930",
   "children": [
      {
        "id": "Leather",
        "label": "Leather",
        "size": 16
      },
      {
        "id": "Cotton",
        "label": "Cotton",
        "size": 4
      },
      {
        "id": "Wool",
        "label": "Wool",
        "size": 4
      }
    ]
   },
  {
   "id": "Unspecified",
   "label": "Unspecified",
   "fill": "#86BCB6",
   "children": [
      {
        "id": "SpecialTransactions",
        "label": "Special Transactions, commodity not classified according to class",
        "size": 28
      }
    ]
   },
  {
   "id": "Services",
   "label": "Services",
   "fill": "#499894",
   "children": [
      {
        "id": "ICT",
        "label": "ICT",
        "size": 61
      },
      {
        "id": "TravelandTourism",
        "label": "Travel and Tourism",
        "size": 60
      }
    ]
   },
  {
   "id": "VegetableOils",
   "label": "VegetableOils",
   "fill": "#E56F72",
   "children": [
      {
        "id": "OliveOil",
        "label": "Olive Oil",
        "size": 0.4
      }
    ]
   }
 ]
};

const codeAsString = `import DataViz, {
  VizType,
  RootDatum,
} from 'react-fast-charts';


...


<DataViz
  id={'example-difference-tree-map'}
  vizType={VizType.DifferenceTreeMap}
  data={[primaryData, secondaryData]}
/>
`;

const dataAsString = `
const primaryData: RootDatum = {
  ...
}

const secondaryData: RootDatum = {
  ...
}
`;

export default () => {
  const secondaryLeafData: RootDatum[] = primaryData.children.map(datum => {
    const children = (datum as RootDatum).children ? (datum as RootDatum).children.map(child => {
      const size = (child as LeafDatum).size * (Math.random() * 2);
      return {...child, size};
    }) : undefined;
    if (children) {
      if (datum.label === 'Unspecified') {
        children.push({
          "id": "Other",
          "label": "Other",
          "size": 67
        })
      }
      return {...datum, children};
    } else {
      return {...datum, children: []};
    }
  });
  const secondaryData: RootDatum = {
    id: "example-secondary-tree-map-data",
    label: "New York",
    children: secondaryLeafData,
  }
  return (
    <Content>
      <TwoColumnSection>
        <SectionHeader>Difference TreeMap</SectionHeader>
          <DataViz
            id={'example-difference-tree-map'}
            vizType={VizType.DifferenceTreeMap}
            data={[primaryData, secondaryData]}
            formatValue={val => '$' + val.toFixed(2) + 'M'}
            animateOn={true}
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

