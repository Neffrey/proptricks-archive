// Components
import Header from '../components/header'
import Footer from '../components/footer'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'


// Apollo
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://fadb.neffrey.com/graphql',
  cache: new InMemoryCache({
    // Attempt at adding tokens to Apollo Cache
    typePolicies: {
      AuthToken: {
        keyFields: [],
      },
      RefreshToken: {
        keyFields: [],
      },
    },
  })
});


/*
function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <UserContext.Provider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </UserContext.Provider>
    </ApolloProvider>
  )
}
*/

function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  )
}

export default App
