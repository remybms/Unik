import styles from '../styles/header.module.css'
import Link from 'next/link'
import Hamburger from './hamburger'



export default function Header(){
    return(
        <><div className={styles.all}>
            <Link href="/"><img src='/img/UNIK.webp' width={198} height={37} alt='Logo de la marque unik'/></Link>
            <div className={styles.links}>
                <Link href="/" className={styles.link} style={{ color: 'blueviolet', textDecoration: 'none' }}>Accueil</Link>
                <Link href="/product" className={styles.link} style={{ color: 'blueviolet', textDecoration: 'none' }}>Produits</Link>
            </div>
        </div>
        <div className={styles.hamburger}>
            <Hamburger/>
        </div></>
    )
}