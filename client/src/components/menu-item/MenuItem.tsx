import { useNavigate } from 'react-router-dom';

import './MenuItem.scss';

export const MenuItem = ({ title, imgUrl, size, linkUrl }) => {

  const navigate = useNavigate();

  return (
    <div 
        className={`${size} menu-item`} 
        onClick={() => navigate(`${linkUrl}`)}>
      <div className='background-image' style={{ backgroundImage: `url(${imgUrl})` }} />
      <div className="content">
        <h2 className="title">{title.toUpperCase()}</h2>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
 