import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: 'http://localhost:3001/gql' });
 
const ApolloApp = () => (
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>
);

render(<ApolloApp/>, document.getElementById('root'));
registerServiceWorker();
