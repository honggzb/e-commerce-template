import { useDispatch } from "react-redux";
import CustomButton from '../custom-button/CustomButton';
import './CollectionItem.scss';
import { addItem } from "../../store/cart.slice";

const CollectionItem = ({ ...item }) => {
  const  { id, name, price, imageUrl } = item;
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addItem(item));
  };

  return (
    <div className='collection-item'>
        <div className='image' style={{backgroundImage: `url(${imageUrl})`}}></div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </div>
        <CustomButton inverted onClick={onClick}>
          Add to cart
        </CustomButton>
    </div>
  )
}

export default CollectionItem;