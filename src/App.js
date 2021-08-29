import React from 'react';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import About from './components/About';
import Search from './components/Search';
import Display from './components/Display';
import Profile from './components/Profile.jsx';

function App() {

  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Search />
            <Display />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>

          <Route exact path='/user/:name'>
            <Profile />
          </Route>

        </Switch>

      </Router>
    </React.Fragment>
  );
}

export default App;
