// Framework
import Head from 'next/head'
import Link from 'next/link'

// Lib Components
import { Container } from '@material-ui/core'

// PT Components
import TricksContainer from '../containers/tricksContainer'

// Page Function
const home = () => {
  // Render
  return (
    <Container maxWidth="md">
      <Head>
        <title>Prop Tricks: Movement Database</title>
      </Head>        

      <main>
        <h1 
          style={{
            textAlign: 'center',
            fontSize:'3em',
            margin:'40px'
          }}
        >
          Welcome to Prop Tricks
        </h1>
        <br />
        <TricksContainer />
        <br />
        <Link href="login">
          <h6>
            <a>Login Page</a>
          </h6>
        </Link>
      </main>
    </Container>
  )
}

export default home