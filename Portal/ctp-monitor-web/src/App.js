import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

/*
  Leave on final imports to not override
*/
import './global.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;