import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Tables from './Components/Tables/Tables';
import Singapore from './Components/sgData/Singapore';
import News from './Components/News/News';
import About from './Components/About/About';
import App from './App';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/summary' component={Tables} />
      <Route path='/singapore' component={Singapore} />
      <Route path='/news' component={News} />
      <Route path='/about' component={About} />
    </Switch>
  )
}

export default Routes;