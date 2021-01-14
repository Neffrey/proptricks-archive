// Framework
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

// Context
import { UserContextProvider } from '../contexts/userContext'

// Components
import Header from '../components/header'
import Footer from '../components/footer'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './styles/app.css'


// Apollo Client
export const client = new ApolloClient({
  uri: 'https://fadb.neffrey.com/graphql',
  cache: new InMemoryCache({})
})


// App
function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <UserContextProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </UserContextProvider>
    </ApolloProvider>
  )
}
export default App
