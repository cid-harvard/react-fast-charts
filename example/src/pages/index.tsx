import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Content } from '../styling/Grid';
import {
  SectionHeader,
  secondaryFont,
} from '../styling/styleUtils';
import {VizType} from 'react-fast-charts';

const List = styled.ul`
  font-family: ${secondaryFont};
`;
const ListItem = styled.li`
  font-size: 1rem;
  margin-bottom: 0.85rem;

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
      <h3>Data Visualizations</h3>
      <List>
        <ListItem><Link to={'/' + VizType.ScatterPlot}>VizType.ScatterPlot</Link></ListItem>
        <ListItem><Link to={'/' + VizType.BarChart}>VizType.BarChart</Link></ListItem>
        <ListItem><Link to={'/' + VizType.ClusterBarChart}>VizType.ClusterBarChart</Link></ListItem>
        <ListItem><Link to={'/' + VizType.RadarChart}>VizType.RadarChart</Link></ListItem>
        <ListItem><Link to={'/' + VizType.GeoMap}>VizType.GeoMap</Link></ListItem>
        <ListItem><Link to={'/' + VizType.LineChart}>VizType.LineChart</Link></ListItem>
        <ListItem><Link to={'/' + VizType.TreeMap}>VizType.TreeMap</Link></ListItem>
        <ListItem><Link to={'/' + VizType.StackChart}>VizType.StackChart</Link></ListItem>
        <ListItem><Link to={'/' + VizType.ClusterChart}>VizType.ClusterChart</Link></ListItem>
        <ListItem><Link to={'/' + VizType.BoxAndWhiskersChart}>VizType.BoxAndWhiskersChart</Link></ListItem>
        <ListItem><Link to={'/' + VizType.Error}>VizType.ErrorViz</Link></ListItem>
      </List>
      <h3>Legends and Scales</h3>
      <List>
        <ListItem><Link to={'/ColorScaleLegend'}>Color Scale Legend</Link></ListItem>
        <ListItem><Link to={'/HorizontalLegend'}>Horizontal Legend</Link></ListItem>
        <ListItem><Link to={'/HowToReadDots'}>How To Read Dots</Link></ListItem>
        <ListItem><Link to={'/Legend'}>Legend</Link></ListItem>
      </List>
    </Content>
  );
}
