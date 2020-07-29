import React from 'react'
import GlobalStyles from './styling/GlobalStyles';
import { Root } from './styling/Grid';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {VizType} from 'react-fast-charts';

import Landing from './pages';
import StickySideNav from './components/StickySideNav';

import ScatterPlot from './pages/ScatterPlot';
import BarChart from './pages/BarChart';
import ClusterBarChart from './pages/ClusterBarChart';
import RadarChart from './pages/RadarChart';
import GeoMap from './pages/GeoMap';
import LineChart from './pages/LineChart';
import TreeMap from './pages/TreeMap';
import DifferenceTreeMap from './pages/DifferenceTreeMap';
import StackChart from './pages/StackChart';
import ClusterChart from './pages/ClusterChart';
import BoxAndWhiskersChart from './pages/BoxAndWhiskersChart';
import ErrorViz from './pages/Error';

import ColorScaleLegend from './pages/ColorScaleLegend';
import HorizontalLegend from './pages/HorizontalLegend';
import HowToReadDots from './pages/HowToReadDots';
import Legend from './pages/Legend';

const navItems = [
  {label: 'Scatter Plot', target: '#/' + VizType.ScatterPlot},
  {label: 'Bar Chart', target: '#/' + VizType.BarChart},
  {label: 'Cluster Bar Chart', target: '#/' + VizType.ClusterBarChart},
  {label: 'Radar Chart', target: '#/' + VizType.RadarChart},
  {label: 'GeoMap', target: '#/' + VizType.GeoMap},
  {label: 'Line Chart', target: '#/' + VizType.LineChart},
  {label: 'TreeMap', target: '#/' + VizType.TreeMap},
  {label: 'Difference TreeMap', target: '#/' + VizType.DifferenceTreeMap},
  {label: 'Stack Chart', target: '#/' + VizType.StackChart},
  {label: 'Cluster Chart', target: '#/' + VizType.ClusterChart},
  {label: 'Box And Whiskers Chart', target: '#/' + VizType.BoxAndWhiskersChart},
  {label: 'Error', target: '#/' + VizType.Error},

  {label: 'Color Scale Legend', target: '#/ColorScaleLegend'},
  {label: 'Horizontal Legend', target: '#/HorizontalLegend'},
  {label: 'How To Read Dots', target: '#/HowToReadDots'},
  {label: 'Legend', target: '#/Legend'},
]

const App = () => {
  return (
    <Root>
      <GlobalStyles />
        <StickySideNav
          links={navItems}
          backgroundColor={'#ecf0f2'}
          borderColor={'#819ea8'}
          hoverColor={'#b7c7cd'}
        />
        <Router>
          <Switch>
              <Route exact path={'/' + VizType.ScatterPlot} component={ScatterPlot} />
              <Route exact path={'/' + VizType.BarChart} component={BarChart} />
              <Route exact path={'/' + VizType.ClusterBarChart} component={ClusterBarChart} />
              <Route exact path={'/' + VizType.RadarChart} component={RadarChart} />
              <Route exact path={'/' + VizType.GeoMap} component={GeoMap} />
              <Route exact path={'/' + VizType.LineChart} component={LineChart} />
              <Route exact path={'/' + VizType.TreeMap} component={TreeMap} />
              <Route exact path={'/' + VizType.DifferenceTreeMap} component={DifferenceTreeMap} />
              <Route exact path={'/' + VizType.StackChart} component={StackChart} />
              <Route exact path={'/' + VizType.ClusterChart} component={ClusterChart} />
              <Route exact path={'/' + VizType.BoxAndWhiskersChart} component={BoxAndWhiskersChart} />
              <Route exact path={'/' + VizType.Error} component={ErrorViz} />
              <Route exact path={'/ColorScaleLegend'} component={ColorScaleLegend} />
              <Route exact path={'/HorizontalLegend'} component={HorizontalLegend} />
              <Route exact path={'/HowToReadDots'} component={HowToReadDots} />
              <Route exact path={'/Legend'} component={Legend} />
            <Route component={Landing} />
          </Switch>
        </Router>
    </Root>
  )
}

export default App
