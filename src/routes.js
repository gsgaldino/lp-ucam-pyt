import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DATHomepage from './pages/DATHomepage';
import GAGHomepage from './pages/GAGHomepage';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={DATHomepage} />
        <Route path="/formacao-gerente-agil" exact component={GAGHomepage} />

      </Switch>
    </BrowserRouter>
  )
}
