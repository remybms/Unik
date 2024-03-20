import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import Header from '../components/header'
import Footer from '../components/footer'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import styles from '../styles/main.module.css'
import Link from 'next/link'
import 'normalize.css'
import React from 'react'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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

  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [mail, setMail] = React.useState("");

  async function sendData(e: { preventDefault: () => void }) {
    e.preventDefault();
    var data
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": name,
          "surname": surname,
          "mail": mail
        }),
      });

      data = await response.json();
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données à l\'API :', error);
    }
    if (data == true) {
      toast.success("Abonnement à la newsletter réussi !")
    } else {
      toast.error("Abonnement à la newsletter échoué !")
    }
  }
  return (

    <main className={styles.all}>
      <Head>
        <title>UNIK sport</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer />
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

      <div className={styles.newsletter}>
        <div className={styles.subtitle}>
          Newsletter
        </div>
        <form className={styles.form} onSubmit={sendData}>
          <input type='text' placeholder='Prénom' className={styles.formValue} required onChange={e => setName(e.target.value)} />
          <input type='text' placeholder='Nom' className={styles.formValue} required onChange={e => setSurname(e.target.value)} />
          <input type='mail' placeholder='Adresse mail' className={styles.mail} required onChange={e => setMail(e.target.value)} />
          <button type='submit' className={styles.formValue}>S'abonner</button>
        </form>
      </div>

      <Footer />
    </main>
  )
}
