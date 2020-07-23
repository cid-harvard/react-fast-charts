import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Content } from '../styling/Grid';
import {
  SectionHeader,
  secondaryFont,
} from '../styling/styleUtils';

const List = styled.ul`
  font-family: ${secondaryFont};
`;
const ListItem = styled.li`
  font-size: 1.25rem;

  a {
    color: rgb(78, 140, 141); 
    text-decoration: none;
    border-bottom: solid 1px rgb(78, 140, 141);
  }
`;

export default () => {
  return (
    <Content>
      <SectionHeader>Examples of react-fast-charts</SectionHeader>
      <List>
        <ListItem><Link to={'/line-chart'}>Line Chart</Link></ListItem>
      </List>
    </Content>
  );
}
