import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from '@material-ui/icons';
import { useState } from 'react';
import './listItem.scss';

export const ListItem = ({ index }) => {
  const [isHovered, setisHovered] = useState(false);
  const trailer =
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';

  return (
    <div
      className='listItem'
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      <img
        src='https://lh3.googleusercontent.com/-aAlGocUK2oo/XXytPffpDuI/AAAAAAAADXg/3H7605CBz0Y8RCUliHRZx80ZfEofEuTuwCLcBGAsYHQ/s0/Phimplay_nguoi-nhen-xa-nha.jpg'
        alt=''
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className='itemInfo'>
            <div className='icons'>
              <PlayArrow className='icon' />
              <Add className='icon' />
              <ThumbUpAltOutlined className='icon' />
              <ThumbDownAltOutlined className='icon' />
            </div>
            <div className='itemInfoTop'>
              <span>1 hour 14 mins</span>
              <span className='limit'>+16</span>
              <span>1999</span>
            </div>

            <div className='desc'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              dicta aliquam ex sequi cupiditate cum eum.
            </div>
            <div className='genre'>Action</div>
          </div>
        </>
      )}
    </div>
  );
};
