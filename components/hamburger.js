import { slide as Menu} from'react-burger-menu'
import { FaShoppingCart } from 'react-icons/fa'
import { Cart } from './cart'

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
            backgroundColor: '#FFCC85',
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
            <Menu customBurgerIcon={<FaShoppingCart size={42} />} styles={styles} right>
                <Cart/>
            </Menu>
        </div>
    )
}
export default Hamburger