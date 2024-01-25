import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomButton from '../custom-button/CustomButton';
import './CardDropdown.scss';
import { RootState } from "../../store/store";
import CartItem from "../cart-item/CartItem";
import { toggleCartHidden } from "../../store/cart.slice";

const CardDropdown = () => {
    const cartItems = useSelector((state: RootState) => state.cartSlice.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClick = () => {
        dispatch(toggleCartHidden());
        navigate('/checkout');
    };

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {cartItems.length ? 
                (cartItems.map(cartItem => ( <CartItem key={cartItem.id} item={cartItem} /> ))) 
                : (<span className="empty-message">Your cart is empty</span>)
            }
            </div>
            <CustomButton onClick={onClick}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CardDropdown;