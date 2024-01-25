
import MenuItem from '../menu-item/MenuItem';
import './Directory.scss';
import { SECTIONS } from '../../constants/constants';

export const Directory = () => {

  return (
    <div className='directory-menu'>
        {SECTIONS && SECTIONS.map((sec, index) => (
            <MenuItem key={index} title={sec.title} imgUrl={sec.imageUrl} linkUrl={sec.linkUrl} size={sec?.size} />
        ))}
  </div>
  );
}

export default Directory;
