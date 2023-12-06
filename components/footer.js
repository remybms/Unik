import Link from "next/link"
import styles from "../styles/footer.module.css"
import { BiLogoInstagram} from "react-icons/bi"

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <img src="/img/UNIK.webp" width={423} height={80} />
                <div>
                    <div className={styles.title}>Liens important</div>
                    <div className={styles.links}>
                        <div>
                            <Link href="/">Accueil</Link>
                            <div>L'atelier personnalisation</div>
                        </div>
                        <div>
                            <div>Mentions légales</div>
                            <div>Politique de confidentialité</div>
                            <div>CGV</div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className={styles.title}>Newsletter</div>
                    <div>Ne manquez pas nos promotions ! Abonnez-vous dès aujourd'hui !</div>
                </div>
                <div>Spécialiste dans la customisation de vêtements pour sportifs particuliers et professionnels.</div>
                <Link href="https://www.instagram.com/_unik.sport/"><BiLogoInstagram size={42}/></Link>
                <div>©2023. UNIK. Par LGDESIGN</div>
            </div>
        </>
    )
}