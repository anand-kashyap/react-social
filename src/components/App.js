import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Posts from 'components/posts/Posts';

// eslint-disable-next-line
import { M } from 'components/utils/Shared';
import Login from 'components/pages/Login';
import Header from 'components/layout/Header/Header';
import PostState from 'context/post/postState';
import CommentState from 'context/comment/state';
import Trans from 'components/utils/Transit';
import Comments from './posts/comments/Comments';

function App() {

  return (
    <PostState>
      <CommentState>
        <Router>
          <Header />
          <Route render={
            ({ location }) =>
              <Trans pageKey={location.key} path={location.pathname} {...location.state}>
                <Switch location={location}>
                  <Route exact path='/' component={Posts} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/comments/:postId' component={Comments} />
                </Switch>
              </Trans>
          } />
        </Router>
      </CommentState>
    </PostState>
  );
}

export default App;
