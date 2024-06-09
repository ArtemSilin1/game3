import React from 'react';
import '../Home.css';

import VipImage from '../HomeImages/vipIntro.png';

function HomeVip() {
   return (
     <div className="HomeVip">
        <img alt='vip' src={VipImage} width='110px' height='110px' />

        <ul className='vip_list'>
          <li className='vip_list_item'>
             <p>1. Связь с разработчиком</p>
          </li>
          <li className='vip_list_item'>
             <p>2. Особый значок</p>
          </li>
          <li className='vip_list_item'>
             <p>3. VIP-бонусы</p>
          </li>
          <li className='vip_list_item'>
             <p>4. Еженедельные промокоды</p>
          </li>
          <li className='vip_list_item'>
             <p>5. Ранний доступ к тестированию</p>
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