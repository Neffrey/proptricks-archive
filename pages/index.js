// Framework
import Head from 'next/head'
import Link from 'next/link'

// Styles
import styles from './styles/index.module.css'

// Components
import TricksContainer from '../containers/tricksContainer'
import { Container } from 'react-bootstrap'



const home = () => {
  return (
    <Container fluid="md">
      <Head>
        <title>Prop Tricks: Movement Database</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>        

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Prop Tricks</h1>
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