import { useSelector } from "react-redux";
import Logo from '../../assets/Logo.svg';
import { auth } from "../../firebase/firebase.utils";
import CartIcon from '../card-icon/CardIcon';
import CardDropdown from "../card-dropdown/CardDropdown";
import { RootState } from "../../store/store";
import { HeaderContainer, LogoContainer, OptionContainer, OptionLink } from "./Header.styles";
import SocialLogin from "../social-login/SocialLogin";

const Header = ({ currentUser }) => {

  const isHidden = useSelector((state: RootState) => state.cartSlice.hidden);

  return (
    <HeaderContainer className='header'>
        <LogoContainer to="/" className='logo-container'>
            <img src={Logo} alt="Logo" />
        </LogoContainer>
        <OptionContainer className='options'>
            <OptionLink className='option' to='/shopall'> SHOP ALL </OptionLink>
            <OptionLink className='option' to='/'> CONTACT </OptionLink>
            { currentUser !== ''? <OptionLink as='div' className='option' onClick={ () => auth.signOut() }> SIGNOUT </OptionLink> 
                        : <OptionLink className='option' to='/signin'> SIGNIN </OptionLink>}
            <CartIcon />
            <SocialLogin />
        </OptionContainer>
        { isHidden ? null : <CardDropdown /> }
    </HeaderContainer>
  )
}

export default Header;