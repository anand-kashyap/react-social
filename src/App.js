import React, { useEffect, Fragment } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Posts from './components/posts/Posts';
import Login from './components/pages/Login';
import Header from './components/layout/Header';

function App() {
  // init materialize js
  useEffect(() => {
    M.AutoInit();
  }, [])
  return (
    <Fragment>
      <Router>
        <Header />
        <div className="container main-content">
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
