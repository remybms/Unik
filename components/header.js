import styles from '../styles/header.module.css'
import Link from 'next/link'



export default function Header(){
    const user = auth.currentUser;
    return(
        <><div className={styles.all}>
            <img src='/img/UNIK.webp' width={198} height={37}/>
            <div className={styles.links}>
                <Link href="/" className={styles.link}>Accueil</Link>
                <div className={styles.link}>Produits</div>
            </div>
        </div></>
    )
}