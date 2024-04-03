import Head from "next/head";
import React from "react";
import styles from "../../styles/product.module.css"
import Header from "../../components/header";
import Footer from "../../components/footer";
import 'normalize.css';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface Product {
    product: string;
    unit_price: number;
    image: string;
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

    const [name, setName] = React.useState("");
    const [surname, setSurname] = React.useState("");
    const [mail, setMail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [sport, setSport] = React.useState("");
    const [club, setClub] = React.useState("");
    const [role, setRole] = React.useState("");
    const [quantity, setQuantity] = React.useState("");

    async function sendData(e: { preventDefault: () => void }) {
        e.preventDefault();
        var data
        try {
            const response = await fetch('/api/commande', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "name": name,
                    "surname": surname,
                    "mail": mail,
                    "phone": phone,
                    "sport": sport,
                    "club": club,
                    "role": role,
                    "quantity": quantity
                }),
            });

            data = await response.json();
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données à l\'API :', error);
        }
        if (data == true) {
            toast.success("Demande de commande envoyée !")
        } else {
            toast.error("Demande de commande échouée !")
        }
    }

    return (
        <main className={styles.all}>
            <Head>
                <title>UNIK sport - produits</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <ToastContainer />
            <div className={styles.title}>
                Nos produits
            </div>
            <div className={styles.cards}>
                {data.map((item) => (
                    <div className={styles.card}>
                        <div>{item.product}</div>
                        <div>{item.unit_price}</div>
                        <img src={item.image} className={styles.image}/>
                    </div>
                ))}
            </div>
            <div className={styles.subtitle}>
                Vous ne trouvez pas votre bonheur ? N'hésitez pas à nous contacter, nous faisons sûrement votre sport !
            </div>

            <div className={styles.title}>
                Formulaire de commande
            </div>
            <form className={styles.form} onSubmit={sendData}>
                <input type='text' placeholder='Prénom' className={styles.formValue} required onChange={e => setName(e.target.value)} />
                <input type='text' placeholder='Nom' className={styles.formValue} required onChange={e => setSurname(e.target.value)} />
                <input type='mail' placeholder='Adresse mail' className={styles.formValue} required onChange={e => setMail(e.target.value)} />
                <input type="text" placeholder="Téléphone" className={styles.formValue} required onChange={e => setPhone(e.target.value)} />
                <input type="text" placeholder="Pour quel sport souhaitez vouys des tenues personalisées ?" className={styles.formValue} required onChange={e => setSport(e.target.value)} />
                <input type="text" placeholder="Quel est votre club?" className={styles.formValue} required onChange={e => setClub(e.target.value)} />
                <input type="text" placeholder="Quel est votre rôle au sein du club?" className={styles.formValue} required onChange={e => setRole(e.target.value)} />
                <select className={styles.formValue} required onChange={e => setQuantity(e.target.value)}>
                    <option value="">--Combien de maillots vous faut-il ?--</option>
                    <option value="5-15">Entre 5 et 15</option>
                    <option value="16-30">Entre 16 et 30</option>
                    <option value="31-100">Entre 31 et 100</option>
                    <option value="101-300">Entre 101 et 300</option>
                    <option value="300+">Plus de 300</option>
                </select>
                <button className={styles.submit} type="submit">Envoyer</button>
            </form>
            <Footer />
        </main>
    )
}