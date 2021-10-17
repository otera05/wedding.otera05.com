import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Invitation: NextPage = () => {
  return (
    <div>
      <Head>
        <title>招待フォーム</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          招待状
        </h1>
      </main>
    </div>
  )
}

export default Invitation
