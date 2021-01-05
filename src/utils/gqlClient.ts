import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URL || 'http://localhost:4000',
});

const errHandler = onError((res) => {
  console.log('response', res);
  // if (res?.networkError?.statusCode === 401) logout();
  if (res.graphQLErrors) {
    res.graphQLErrors.map(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Path: ${path}, Location:`,
        locations
      )
    );

    if (res.response?.errors) {
      (res.response.errors as any) = null;
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: errHandler.concat(httpLink),
});

export default client;
export { client };
