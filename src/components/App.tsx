import React from 'react';
import './App.scss';
import { createBrowserHistory } from 'history';
import { Route, /* BrowserRouter as  */Router, Switch } from 'react-router-dom';
import Posts from './posts/Posts';

import 'utils/Shared';
import Login from './pages/login/Login';
import Header from './layout/Header/Header';
import PostState from 'context/post/postState';
import CommentState from 'context/comment/state';
import Trans from 'utils/Transit';
import Comments from './posts/comments/Comments';
import Register from './pages/register/Register';
import ForgotPass from './pages/forgot-password/ForgotPass';

export const history = createBrowserHistory();

function App() {
  return (
    <PostState>
      <CommentState>
        <Router history={history}>
          <Header />
          <Route
            render={({ location }) => (
              <Trans
                pageKey={location.key}
                path={location.pathname}
                {...location.state}
              >
                <Switch location={location}>
                  <Route exact path='/' component={Posts} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/forgot-password' component={ForgotPass} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/comments/:postId' component={Comments} />
                </Switch>
              </Trans>
            )}
          />
        </Router>
      </CommentState>
    </PostState>
  );
}

export default App;
