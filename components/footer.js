import Link from "next/link"
import styles from "../styles/footer.module.css"
import { BiLogoInstagram } from "react-icons/bi"

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <img src="/img/UNIK.webp" width={423} height={80} />
                <div>
                    <div className={styles.title}>Liens important</div>
                    <div className={styles.links}>
                        <div className={styles.pages}>
                            <Link href="/">Accueil</Link>
                            <Link href="/product">Produits</Link>
                        </div>
                        <div>
                            <div>
                                <Link href="https://unik-sport.com/?page_id=422">Mentions légales</Link>
                            </div>
                            <div>
                                <Link href="https://unik-sport.com/?page_id=422">Politique de confidentialité</Link>
                            </div>
                            <div>
                                <Link href="https://unik-sport.com/?page_id=422">CGV</Link>
                            </div>

                        </div>
                    </div>

                </div>
                <div>
                    <div className={styles.title}>Newsletter</div>
                    <div>Ne manquez pas nos promotions ! Abonnez-vous dès aujourd'hui !</div>
                </div>
                <div>Spécialiste dans la customisation de vêtements pour sportifs particuliers et professionnels.</div>
                <Link href="https://www.instagram.com/_unik.sport/"><BiLogoInstagram size={42} /></Link>
                <Link href="https://lg-design.fr/">©2023. UNIK. Par LGDESIGN</Link>
            </div>
        </>
    )
}