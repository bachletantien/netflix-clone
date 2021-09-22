import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import './featured.scss';

export const Featured = ({ type }) => {
  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === 'movie' ? 'Movie' : 'Series'}</span>
          <select name='genre' id='genre'>
            <option>Genre</option>
            <option value='Adventure'>Adventure</option>
            <option value='Comedy'>Comedy</option>
            <option value='crime'>Crime</option>
            <option value='fantasy'>Fantasy</option>
            <option value='historical'>Historical</option>
            <option value='horror'>Horror</option>
            <option value='romatic'>Romatic</option>
            <option value='sci-fy'>Sci-fy</option>
            <option value='Thriller'>Thriller</option>
            <option value='Western'>Western</option>
            <option value='Animation'>Animation</option>
            <option value='Drama'>Drama</option>
            <option value='Documentary'>Documentary</option>
          </select>
        </div>
      )}
      <img
        src='https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSBC1WP5u5zgqIDbObK9rhWjxfVQgnbbtJ_uB9re_zx9pArkOs_Lnu3DmhR5N0_NO2k2yDezLGf75xvwxVUUoepsvy8y.jpg?r=3bd'
        alt=''
      />
      <div className='info'>
        <img
          src='https://fanart.tv/fanart/tv/331600/hdtvlogo/castle-rock-5b3bc1bb98460.png'
          alt=''
        />
        <span className='desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet
          natus omnis voluptas ad! Exercitationem aliquam temporibus hic nihil
          modi odit nam, expedita mollitia sed consequuntur vero ut. Minus,
          debitis?
        </span>
        <div className='buttons'>
          <button className='play'>
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};
