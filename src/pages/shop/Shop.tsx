import { useParams  } from 'react-router-dom'
import CollectionItem from '../../components/collection-item/CollectionItem';
import { SHOP_DATA } from '../../constants/fake-shop-data';
import './Shop.scss';

const Shop = () => {
  const category = useParams();
  const itemsByTitle = SHOP_DATA.filter(shop => shop.routeName === category.category);
  return (
      <>
        <h2 className='title'>{ category.category.toUpperCase() }</h2>
        <div className='shop-in-category'>
          { itemsByTitle[0].items.map((item, index) => (
              <CollectionItem key={index+item.id} {...item} />
          ))}
        </div>
      </>
    )
  }

  export default Shop;
