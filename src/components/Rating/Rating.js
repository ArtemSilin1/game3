import React, {useState} from 'react';
import './Rating.css';
import RatingPlace from './RatingComponents/RatingPlace.js';
import InfoPopup from './RatingComponents/InfoPopup.js';

import Info from './RatingImages/Info.png';
import Place1 from './RatingImages/place1.svg';
import Place2 from './RatingImages/place2.svg';
import Place3 from './RatingImages/place3.svg';

function Rating() {

  const [infoActive, setInfoActive] = useState(false);

  return (
    <div className="Rating">
        <h1 className='rating_title'>Рейтинг игроков</h1>
        <div className='rating_header'>
          <img src={Info} alt='information' onClick={setInfoActive} />
        </div>

        <div className='top_places'>

          <div className='top_place'>
            <img src={Place2} alt='second_place' />
            <p className='player_name'>NickName</p>
            <p className='player_cash'>1,000 B</p>
          </div>

          <div className='top_palce first_place'>
          <img src={Place1} alt='second_place' />
            <p className='player_name'>NickName</p>
            <p className='player_cash'>1,000 B</p>
          </div>

          <div className='top_place'>
            <img src={Place3} alt='second_place' />
            <p className='player_name'>NickName</p>
            <p className='player_cash'>1,000 B</p>
          </div>
        </div>

        <div className='other_places'>
          <RatingPlace rPlace={4} />
          <RatingPlace rPlace={5} />
          <RatingPlace rPlace={6} />
          <RatingPlace rPlace={7} />
          <RatingPlace rPlace={8} />
          <RatingPlace rPlace={9} />
          <RatingPlace rPlace={10} />
          <RatingPlace rPlace={11} />
          <RatingPlace rPlace={12} />
          <RatingPlace rPlace={13} />
          <RatingPlace rPlace={14} />
          <RatingPlace rPlace={15} />
          <RatingPlace rPlace={16} />
          <RatingPlace rPlace={17} />
          <RatingPlace rPlace={18} />
          <RatingPlace rPlace={19} />
          <RatingPlace rPlace={20} />
          <RatingPlace rPlace={21} />
          <RatingPlace rPlace={22} />
          <RatingPlace rPlace={23} />
          <RatingPlace rPlace={24} />
          <RatingPlace rPlace={25} />
          <RatingPlace rPlace={26} />
          <RatingPlace rPlace={27} />
          <RatingPlace rPlace={28} />
          <RatingPlace rPlace={29} />
          <RatingPlace rPlace={30} />
          <RatingPlace rPlace={31} />
          <RatingPlace rPlace={32} />
          <RatingPlace rPlace={33} />
          <RatingPlace rPlace={34} />
          <RatingPlace rPlace={35} />
          <RatingPlace rPlace={36} />
          <RatingPlace rPlace={37} />
          <RatingPlace rPlace={38} />
          <RatingPlace rPlace={39} />
          <RatingPlace rPlace={40} />
          <RatingPlace rPlace={41} />
          <RatingPlace rPlace={42} />
          <RatingPlace rPlace={43} />
          <RatingPlace rPlace={44} />
          <RatingPlace rPlace={45} />
          <RatingPlace rPlace={46} />
          <RatingPlace rPlace={47} />
          <RatingPlace rPlace={48} />
          <RatingPlace rPlace={49} />
          <RatingPlace rPlace={50} />
        </div>

        <InfoPopup active={infoActive} setActive={setInfoActive} />
    </div>
  );
}
 
 export default Rating;