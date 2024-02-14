import Head from "next/head";
import React from "react";
import styles from "../../styles/product.module.css"
import Header from "../../components/header";
import Footer from "../../components/footer";
import 'normalize.css';

interface Product {
    product: string;
    unit_price: number;
  }

export default function Product() {

    const [data, setData] = React.useState<Product[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/articles');
                const apiData = await response.json();
                setData(apiData);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de l\'API', error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className={styles.all}>
            <Head>
                <title>UNIK sport - produits</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className={styles.cards}>
            {data.map((item) => (
                <div className={styles.card}>
                    <div>{item.product}</div>
                    <div>{item.unit_price}</div>
                </div>
            ))}
            </div>
            <Footer />
        </main>
    )
}