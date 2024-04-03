import Link from "next/link"
import styles from "../styles/footer.module.css"
import { BiLogoInstagram } from "react-icons/bi"

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <img src="/img/UNIK.webp" width={423} height={80} className={styles.image}/>
                <div>
                    <div className={styles.title}>Liens important</div>
                    <div className={styles.links}>
                        <div className={styles.pages}>
                            <Link href="/" style={{ color: 'blueviolet', textDecoration: 'none' }}>Accueil</Link>
                            <Link href="/product" style={{ color: 'blueviolet', textDecoration: 'none' }}>Produits</Link>
                        </div>
                        <div>
                            <div>
                                <Link as="/MentionsLegales" href="/legal-mention/#MentionsLegales" style={{ color: 'blueviolet', textDecoration: 'none' }}>Mentions légales</Link>
                            </div>
                            <div>
                                <Link as="/Confidentialite" href="/legal-mention/#Confidentialité" style={{ color: 'blueviolet', textDecoration: 'none' }}>Politique de confidentialité</Link>
                            </div>
                            <div>
                                <Link as="/CGV" href="/legal-mention/#CGV" style={{ color: 'blueviolet', textDecoration: 'none' }}>CGV</Link>
                            </div>

                        </div>
                    </div>

                </div>
                <div>
                    <div className={styles.title}>Newsletter</div>
                    <div>Ne manquez pas nos promotions ! Abonnez-vous dès aujourd'hui !</div>
                </div>
                <div className={styles.unik}>Spécialiste dans la customisation de vêtements pour sportifs particuliers et professionnels.</div>
                <Link href="https://www.instagram.com/_unik.sport/" style={{ color: 'blueviolet', textDecoration: 'none' }}><BiLogoInstagram size={42} /></Link>
                <Link href="https://lg-design.fr/" style={{ color: 'blueviolet', textDecoration: 'none' }}>©2023. UNIK. Par LGDESIGN</Link>
            </div>
        </>
    )
}