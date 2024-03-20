import styles from '../styles/header.module.css'
import Link from 'next/link'



export default function Header(){
    return(
        <><div className={styles.all}>
            <img src='/img/UNIK.webp' width={198} height={37}/>
            <div className={styles.links}>
                <Link href="/" className={styles.link} style={{ color: 'blueviolet', textDecoration: 'none' }}>Accueil</Link>
                <Link href="/product" className={styles.link} style={{ color: 'blueviolet', textDecoration: 'none' }}>Produits</Link>
            </div>
        </div></>
    )
}