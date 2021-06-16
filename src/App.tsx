import React from 'react';
import { ApolloProvider } from 'react-apollo';

import apolloClient from './services/apollo';

import Main from './pages/Main';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <Main />
    <GlobalStyle />
  </ApolloProvider>
);

export default App;
