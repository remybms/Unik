import styles from '../styles/header.module.css'
import Hamburger from './hamburger'
import Link from 'next/link'
import { auth } from "../config/firebase"
import { CgProfile } from 'react-icons/cg'



export default function Header(){
    const user = auth.currentUser;
    return(
        <><div className={styles.all}>
            <img src='/img/UNIK.webp' width={198} height={37}/>
            <div className={styles.links}>
                <Link href="/" className={styles.link}>Accueil</Link>
                <div className={styles.link}>Boutique</div>
                <div className={styles.link}>Atelier</div>
            </div>
            
            {user ?
                    <Link href="/profile"><CgProfile size={42} /></Link>
                    :
                    <Link as="/connexion" href="/Auth/Login"><CgProfile size={42} /></Link>
            }
            <div className={styles.cartButton}>
                <Hamburger />
            </div>
        </div></>
    )
}