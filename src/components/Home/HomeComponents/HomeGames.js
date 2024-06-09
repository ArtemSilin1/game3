import React from 'react';
import '../Home.css';

import Rocket from '../HomeImages/GameImages/Rocket.png';
import Cubes from '../HomeImages/GameImages/Cubes.png';
import Towers from '../HomeImages/GameImages/Towers.png';
import Bomb from '../HomeImages/GameImages/Bomb.png';
import Safe from '../HomeImages/GameImages/Safe.png';
import Cards from '../HomeImages/GameImages/Cards.png';
import Wheel from '../HomeImages/GameImages/Wheel.png';
import GoStop from '../HomeImages/GameImages/GoStop.png';
import Coins from '../HomeImages/GameImages/Coins.png';
import Table from '../HomeImages/GameImages/Table.png';
import Chel from '../HomeImages/GameImages/Chel.png';
import Quest from '../HomeImages/GameImages/Quest.png';

function Games() {
   return (
    <ul className="Games">

        <li className='games_item'>
            <img className='g_item_image' alt='' src={Bomb} />
        </li>
        <li className='games_item'>
            <img className='g_item_image' alt='' src={Cards} />
        </li>
        <li className='games_item'>
            <img className='g_item_image' alt='' src={Chel} />
        </li>
        <li className='games_item'>
            <img className='g_item_image' alt='' src={Coins} />
        </li>
        <li className='games_item'>
            <img className='g_item_image' alt='' src={Cubes} />
        </li>
        <li className='games_item'>
            <img className='g_item_image' alt='' src={GoStop} />
        </li>
        <li className='games_item'>
            <img className='g_item_image' alt='' src={Quest} />
        </li>
        <li className='games_item'>
            <img className='g_item_image' alt='' src={Rocket} />
        </li>
        <li className='games_item'>
            <img className='g_item_image' alt='' src={Safe} />
        </li>
        <li className='games_item'>
            <img className='g_item_image' alt='' src={Table} />
        </li>
        <li className='games_item'>
            <img className='g_item_image' alt='' src={Towers} />
        </li>
        <li className='games_item'>
            <img className='g_item_image' alt='' src={Wheel} />
        </li>
        
    </ul>
   );
 }
 
 export default Games;