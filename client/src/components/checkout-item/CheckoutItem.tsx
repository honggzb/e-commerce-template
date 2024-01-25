import { addItemQuantity, clearItemFromCart, removeItemQuantity } from '../../store/cart.slice';
import './CheckoutItem.scss';
import { useDispatch } from "react-redux";

const CheckOutItem = ({ cartItem }) => {

    const dispatch = useDispatch();

    return (
        <div className='checkout-item'>
            <div className='image-container'>
            <img src={cartItem.imageUrl} alt='item' />
            </div>
            <span className='name'>{cartItem.name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => dispatch(removeItemQuantity(cartItem))}>&#10094;</div>
                {cartItem.quantity}
                <div className='arrow' onClick={() => dispatch(addItemQuantity(cartItem))}> &#10095; </div>
            </span>
            <span className='price'>{cartItem.price}</span>
            <div className='remove-button' onClick={() => dispatch(clearItemFromCart(cartItem))}>&#10005;</div>
        </div>
    )
}

export default CheckOutItem