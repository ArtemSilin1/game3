import React from 'react';
import '../Rating.css';

import Avatar from '../RatingImages/Avatar.svg';

function RatingPlace({ rPlace }) {
   return (
     <div className="rating_place">
         <img src={Avatar} alt='avatar' />
         <div className='player_info'>
            <p className='player_name'>NickName</p>
            <p className='player_cash'>1,000 B</p>
         </div>
         <p className='place_in_rating'>{rPlace}</p>
     </div>
   );
}
 
 export default RatingPlace;