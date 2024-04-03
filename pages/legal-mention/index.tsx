import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import 'normalize.css';


export default function legalMention(){
    return(
        <main>
            <Head>
                <title>UNIK sport - produits</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div id="MentionsLegales">
                Mentions Légales
            </div>
            <div id="Confidentialité">
                Politique de confidentialité
            </div>
            <div id="CGV">
                CGV
            </div>
            <Footer />
        </main>
    )
}