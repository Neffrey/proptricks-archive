// Context
import { AuthContextProvider } from '../contexts/authContext'
import { ApolloConfig } from '../components/apolloConfig'

// Components
import Header from '../components/header'
import Footer from '../components/footer'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './styles/app.css'



// App
function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
        <ApolloConfig>
          <Header />
          <Component {...pageProps} />
          <Footer />
      </ApolloConfig>
    </AuthContextProvider>
  )
}
export default App
