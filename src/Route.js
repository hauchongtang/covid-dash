import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Tables from './Components/Tables/Tables';
import Singapore from './Components/sgData/Singapore';
import About from './Components/About/About';
import App from './App';
import TopTenTables from './Components/Tables/TopTenTables';
import TablesYtd from './Components/Tables/TablesYtd';
import TopTenYtd from './Components/Tables/TopTenYtd';
import Globe from './Components/Globe/Globe';
import Landing from './Components/LandingPage/LandingPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/home' component={App} />
      <Route path='/summary' component={Tables} />
      <Route path='/ytdsummary' component={TablesYtd} />
      <Route path='/toptensummary' component={TopTenTables} />
      <Route path='/toptensummaryytd' component={TopTenYtd} />
      <Route path='/singapore' component={Singapore} />
      <Route path='/globe' component={Globe} />
      <Route path='/about' component={About} />
    </Switch>
  )
}

export default Routes;