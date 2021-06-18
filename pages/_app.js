// Default Styles And Fonts
import './styles.css'
import "@fontsource/roboto"
import "@fontsource/big-shoulders-display"

// Framework
import React from 'react'

// Contexts
import Apollo from '../components/apollo'
import User from '../contexts/userContext'
import Themer from '../contexts/themeContext'

// Components
import Header from '../components/header'
import BodyBox from '../components/bodyBox'
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
      <User>
        <Themer>
          <Header />
          <BodyBox>
            <Component {...pageProps} />
          </BodyBox>
          <Footer />
        </Themer>
      </User>
    </Apollo>
  )
}
export default App
