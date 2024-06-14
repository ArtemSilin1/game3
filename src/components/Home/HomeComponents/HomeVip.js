import React from 'react';
import '../Home.css';

import VipImage from '../HomeImages/vipIntro.png';

function HomeVip() {
   return (
      <div className="HomeVip">
         <img alt='vip' src={VipImage} width='110px' height='110px' />

         <ul className='vip_list'>
            <li className='vip_list_item'>
               <p>1. Особый значок</p>
            </li>
            <li className='vip_list_item'>
               <p>2. VIP-бонусы</p>
            </li>
            <li className='vip_list_item'>
               <p>3. Еженедельные промокоды</p>
            </li>
         </ul>

         <div className='price_container'>
           1,000 ₽/Месяц
         </div>

         <p className='button_to_buy'>
            Купить
         </p>
      </div>
   );
 }
 
 export default HomeVip;