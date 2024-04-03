import { slide as Menu} from'react-burger-menu'
import { IoReorderThree } from 'react-icons/io5'
import Link from 'next/link'

function Hamburger(){
    var styles ={
        bmBurgerButton: {
          position: 'absolute',
          width: '42px',
          height: '42px',
        },
        bmMenuWrap: {
            width: '40%',
            height: '90%',
            marginTop: '10%',
            padding: '5%',
            backgroundColor: 'blueviolet',
            borderRadius: '10px',
            color: '#262626'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px',
        },
        bmCross: {
            background: '#262626',
        },
    }
    return(
        <div>
            <Menu customBurgerIcon={<IoReorderThree size={42} />} styles={styles}>
                <Link href="/" style={{ color: 'black', textDecoration: 'none' }}>Accueil</Link>
                <Link href="/product" style={{ color: 'black', textDecoration: 'none' }}>Produits</Link>
            </Menu>
        </div>
    )
}
export default Hamburger