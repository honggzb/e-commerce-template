import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import { SHOP_DATA } from '../../constants/fake-shop-data';

const ShopAll = () => {
    return (
        <div className='shop'>
        { SHOP_DATA.map((shop, index) => (
            <CollectionPreview key={index+shop.id} title={shop.title} {...shop} />
        ))}
      </div>
    )
  }
  
  export default ShopAll;
