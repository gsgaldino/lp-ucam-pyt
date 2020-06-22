import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PYTHomepage from './pages/PYTHomepage';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={PYTHomepage} />

      </Switch>
    </BrowserRouter>
  )
}
