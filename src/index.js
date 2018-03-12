// @flow
import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Pass your GraphQL endpoint to uri
const client: ApolloClient = new ApolloClient({ uri: 'http://localhost:3001/gql' });

const ApolloApp = () => (
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>
);

const $root = document && document.getElementById('root');

if ($root) {
  render(<ApolloApp/>, $root);
}

registerServiceWorker();
