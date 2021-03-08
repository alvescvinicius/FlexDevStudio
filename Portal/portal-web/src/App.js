import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/Header';
import firebase from './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
  Leave on final imports to not override
*/
import './global.css';

class App extends Component {

  state = {
    firebaseInitialized: false
  };

  componentDidMount(){

    firebase.isInitialized().then(resultado => {
      this.setState({firebaseInitialized: resultado});
    })
  }
  
  render(){
    return this.state.firebaseInitialized !== false ? (
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
        </Switch>
      </BrowserRouter>
    ) : (
      <h1>Loading...</h1>      
    );
  }
}

export default App;
