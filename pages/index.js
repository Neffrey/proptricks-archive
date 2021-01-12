// Framework
import Head from 'next/head'
import Link from 'next/link'

// Styles
import styles from '../styles/home.module.css'

// Components
import Tricks from '../containers/tricks.js'



const home = () => {
  return (
    <div>
      <Head>
        <title>Prop Tricks: Movement Database</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>        

      <main className={ styles.main }>
        <h1 className={ styles.title }>Welcome to Prop Tricks</h1>
        <Tricks></Tricks>

        <Link href="login">
          <h6>
            Login Page
          </h6>
        </Link>
      </main>

    </div>
  )
}

export default home