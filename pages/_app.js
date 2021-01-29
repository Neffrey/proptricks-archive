// Default Styles And Fonts
import './styles.css'
import "@fontsource/roboto"

// Framework
import React from 'react'

// Contexts
import Apollo from '../components/apollo'
import Auth from '../contexts/authContext'
import Themer from '../contexts/themeContext'

// Components
import Header from '../components/header'
import Footer from '../components/footer'




// App
function App({ Component, pageProps }) {

  
  // Remove the server-side injected CSS for MUI
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])


  return (
    <Apollo>
      <Auth>
        <Themer>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Themer>
      </Auth>
    </Apollo>
  )
}
export default App
