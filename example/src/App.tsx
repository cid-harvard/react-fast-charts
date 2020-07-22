import React from 'react'
import GlobalStyles from './styling/GlobalStyles';
import { Root } from './styling/Grid';

import LineChart from './pages/LineChart';

const App = () => {
  return (
    <Root>
      <GlobalStyles />
      <LineChart />
    </Root>
  )
}

export default App
