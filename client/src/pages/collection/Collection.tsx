import CollectionItem from '../../components/collection-item/CollectionItem';
import './Collection.scss';

const CollectionPage = ({...items}) => {

    return (
        <div className='collection-page'>
          <h2 className='title'>{items.title.toUpperCase()}</h2>
          <div className='items'>
            {items.map(item => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      );
}

export default CollectionPage;