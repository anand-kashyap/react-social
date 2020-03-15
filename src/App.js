import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Posts from './components/posts/Posts';
import { M } from './components/utils/Shared';
import Login from './components/pages/Login';
import Header from './components/layout/Header/Header';
import Post from './components/posts/Post';
import PostState from './context/post/postState';

function App() {
  // init materialize js
  return (
    <PostState>
      <Router>
        <Header />
        <div className="container main-content">
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/post/:id" component={Post} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </PostState>
  );
}

export default App;
