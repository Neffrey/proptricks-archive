// Framework
import Head from 'next/head'
import Link from 'next/link'

// Styles
import styles from '../styles/home.module.css'

// Components
import Header from '../components/Header.js'
import Tricks from '../components/tricks.js'


// Apollo
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://fadb.neffrey.com/graphql',
  cache: new InMemoryCache()
});


// Redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

/*
const store = createStore(
  combineReducers({
    apollo: client.reducer(),
  }),
  {}, // initial state
  compose(
    applyMiddleware(client.middleware()),
    // If you are using the devToolsExtension, you can add it here also
    (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);
*/




export default function Home() {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
        

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Prop Tricks</h1>
        <Tricks></Tricks>
      </main>

      <footer className={styles.footer}>
        <a>Built by Neffrey</a>
      </footer>
    </ApolloProvider>
  )
}
