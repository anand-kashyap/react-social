import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Posts from './components/posts/Posts';

// eslint-disable-next-line
import { M } from './components/utils/Shared';
import Login from './components/pages/Login';
import Header from './components/layout/Header/Header';
import PostState from './context/post/postState';
import Trans from './Transit';
import Comments from './components/posts/Comments';

function App() {
  // init materialize js
  return (
    <PostState>
      <Router>
        <Header />
        <Route render={
          ({ location }) => {
            return <Trans pageKey={location.key} path={location.pathname} {...location.state}>
              <Switch location={location}>
                <Route exact path="/" component={Posts} />
                <Route exact path="/comments/:postId" component={Comments} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </Trans>
          }
        } />
      </Router>
    </PostState>
  );
}

export default App;
