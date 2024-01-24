import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './Header.scss';
import Logo from '../../assets/Logo.svg';
import { auth } from "../../firebase/firebase.utils";
import CartIcon from '../card-icon/CardIcon';
import CardDropdown from "../card-dropdown/CardDropdown";
import { RootState } from "../../store/store";

const Header = ({ currentUser }) => {

  const isHidden = useSelector((state: RootState) => state.cartSlice.hidden);
  
  return (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <img src={Logo} alt="Logo" />
        </Link>
        <div className='options'>
            <Link className='option' to='/shopall'> SHOP ALL </Link>
            <Link className='option' to='/'> CONTACT </Link>
            { currentUser !== ''? <div className='option' onClick={ () => auth.signOut() }> SIGNOUT </div> 
                        : <Link className='option' to='/signin'> SIGNIN </Link>}
            <CartIcon />
        </div>
        { isHidden ? null : <CardDropdown /> }
    </div>
  )
}

export default Header;