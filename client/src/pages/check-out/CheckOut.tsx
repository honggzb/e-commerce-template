import { useSelector } from "react-redux";
import './CheckOut.scss';
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeButton from "../../components/stripe-button/StripeButton";

const CheckOut = () => {
  
  const cartItems = useSelector((state: RootState) => state.cartSlice.cartItems);
  const total = useSelector((state: RootState) => state.cartSlice.totalPrice);
  
  return (
      <div className='checkout-page'>
        <div className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: ${total}</div>
        <div className="test-warning">
          *Please use the following test credit card for payments*<br />
          4242 4242 4242 4242 - Exp: 01/20 9 CVV: 11111<br />
        </div>
        <StripeButton price={total} />
      </div>
    )
}
  
export default CheckOut;
