import ShopIcon from '../../assets/shopping-bag.svg';
import { useDispatch, useSelector } from "react-redux";
import './CardIcon.scss';
import { toggleCartHidden } from '../../store/cart.slice';
import { RootState } from '../../store/store';

const CardIcon = () => {

    const totalItemCount = useSelector((state: RootState) => state.cartSlice.totalItemCount);
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(toggleCartHidden());
    }

    return (
        <div className="cart-icon" onClick={onClick}>
            <img src={ShopIcon} alt="ShopIcon" className='shopping-icon' />
            <span className='item-count'>{ totalItemCount }</span>
        </div>
    )
}

export default CardIcon;