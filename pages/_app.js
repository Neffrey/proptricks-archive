// Default Styles
import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Contexts
import { AuthContextProvider } from '../contexts/authContext'
import { ApolloContainer } from '../containers/apolloContainer'

// Components
import Header from '../components/header'
import Footer from '../components/footer'




// App
function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ApolloContainer>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ApolloContainer>
    </AuthContextProvider>
  )
}
export default App
