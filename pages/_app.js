// Default Styles
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Contexts
import { AuthContextProvider } from '../contexts/authContext'
import { Apollo } from '../components/apollo'

// Components
import Header from '../components/header'
import Footer from '../components/footer'




// App
function App({ Component, pageProps }) {
  return (
    <Apollo>
      <AuthContextProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AuthContextProvider>
    </Apollo>
  )
}
export default App
