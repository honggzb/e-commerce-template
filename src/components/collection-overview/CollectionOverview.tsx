import './CollectionOverview.scss';
import { SHOP_DATA } from '../../constants/fake-shop-data';
import CollectionPreview from '../collection-preview/CollectionPreview';

const CollectionOverview = () => {
  return (
    <div className='collections-overview'>
        { SHOP_DATA.map((shop, index) => (
            <CollectionPreview key={index+shop.id} {...shop} />
        ))}
    </div>
  )
}

export default CollectionOverview;