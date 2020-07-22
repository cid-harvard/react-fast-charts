import React from 'react'
import GlobalStyles from './styling/GlobalStyles';
import { Root } from './styling/Grid';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Landing from './pages';
import LineChart from './pages/LineChart';

const App = () => {
  return (
    <Root>
      <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path={'/line-chart'} component={LineChart} />
            <Route component={Landing} />
          </Switch>
        </Router>
    </Root>
  )
}

export default App
