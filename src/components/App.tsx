import { ApolloProvider } from '@apollo/client';
import AuthState from 'context/auth/authState';
import CommentState from 'context/comment/state';
import PostState from 'context/post/postState';
import { createBrowserHistory } from 'history';
import React from 'react';
import {
  Route,
  /* BrowserRouter as  */ Router,
  Switch,
} from 'react-router-dom';
import client from 'utils/gqlClient';
import 'utils/Shared';
import Trans from 'utils/Transit';
import './App.scss';
import Header from './layout/Header/Header';
import ForgotPass from './pages/forgot-password/ForgotPass';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Comments from './posts/comments/Comments';
import Posts from './posts/Posts';

export const history = createBrowserHistory();

const App = () => (
  <ApolloProvider client={client}>
    <AuthState>
      <PostState>
        <CommentState>
          <Router history={history}>
            <Header />
            <Route
              render={({ location }) => (
                <Trans path={location.pathname} {...location.state}>
                  <Switch location={location}>
                    <Route exact path='/login' component={Login} />
                    <Route
                      exact
                      path='/forgot-password'
                      component={ForgotPass}
                    />
                    <Route exact path='/register' component={Register} />
                    <Route
                      exact
                      path='/comments/:postId'
                      component={Comments}
                    />
                    <Route exact path='/' component={Posts} />
                  </Switch>
                </Trans>
              )}
            />
          </Router>
        </CommentState>
      </PostState>
    </AuthState>
  </ApolloProvider>
);

export default App;
