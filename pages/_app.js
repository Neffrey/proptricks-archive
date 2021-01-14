// Context
import { UserContextProvider } from '../contexts/userContext'
import { ApolloConfig } from '../apolloConfig'

// Components
import Header from '../components/header'
import Footer from '../components/footer'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './styles/app.css'



// App
function App({ Component, pageProps }) {
  //let authToken = localStorage.getItem("auth")
  //let refreshToken = window.localStorage.getItem("refresh")
  return (
    <UserContextProvider>
        <ApolloConfig>
          <Header />
          <Component {...pageProps} />
          <Footer />
      </ApolloConfig>
    </UserContextProvider>
  )
}
export default App
