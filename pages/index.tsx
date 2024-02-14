import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import Header from '../components/header'
import Footer from '../components/footer'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import styles from '../styles/main.module.css'
import Link from 'next/link'
import 'normalize.css'

type ConnectionStatus = {
  isConnected: boolean
}

export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (

    <main className={styles.all}>
      <Head>
        <title>UNIK sport</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.intro}>
        <div className={styles.title}>SOYEZ <span className={styles.detail}>UNIK</span> AVEC STYLE</div>
        <div className={styles.subtitle}>PERSONNALISEZ VOS ÉQUIPEMENTS</div>
        <Link href='/product' className={styles.button}>VOIR NOS PRODUITS</Link>
      </div>

      <div className={styles.engagement}>
        <div className={styles.subtitle}>
          Notre engagement
        </div>
        <div className={styles.text}>
          Nous continuons et nous continuerons d’être à l’écoute de chacun de nos clients pour établir des relations saines et tendre progressivement vers l’objectif commun fixé.
        </div>
      </div>

      <div className={styles.sports}>
        <div className={styles.text}>
          <span className={styles.detail}>Nos différents sports</span>
        </div>
        <div className={styles.subtitle}>
          Chacun son sport
        </div>
        <div className={styles.text}>
          Parce que chaque sport à le droit d'être UNIK.
        </div>
      </div>

      <Footer />
    </main>
  )
}
