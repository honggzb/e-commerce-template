import CollectionItem from '../collection-item/CollectionItem';
import './CollectionPreview.scss';

const CollectionPreview = ({...items}) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{items.title.toUpperCase()}</h1>
      <div className='preview'>
        {items.items.filter((item, idx) => idx <4 )
              .map((item, i) => (
                <CollectionItem key={i+item.id} {...item} />
         ))}
      </div>
    </div>
  )
}

export default CollectionPreview;