import React, { useState } from 'react';
import './Home.css';
import Games from './HomeComponents/HomeGames.js';
import HomeHistory from './HomeComponents/HomeHistory.js';
import HomeVip from './HomeComponents/HomeVip.js';
import Profile from './HomeImages/Profile.svg';

function Home() {
   const [activeTab, setActiveTab] = useState('games');

   const handleTabClick = (tab) => {
      setActiveTab(tab);
   }

   return (
     <div className="Home">

        <div className='home_header'>
          <div className='profile'>
            <img alt='profile' src={Profile} width='50px' height='50px' />
            <p className='user_name'>Artem</p>
          </div>
          
          <p className='user_balance'>5,000.00 B</p>
          <div className='h_header_menu'>
            <p className='h_header_button'>Отправить</p>
            <p className='h_header_button'>Получить</p>
            <p className='h_header_button'>Купить</p>
          </div>
        </div>

        <div className='home_nav'>
          <p className={`h_nav_item ${activeTab === 'games' ? 'active' : ''}`} onClick={() => handleTabClick('games')}>Игры</p>
          <p className={`h_nav_item ${activeTab === 'history' ? 'active' : ''}`} onClick={() => handleTabClick('history')}>История</p>
          <p className={`h_nav_item ${activeTab === 'vip' ? 'active' : ''}`} onClick={() => handleTabClick('vip')}>VIP</p>
        </div>
        
        <div className='home_content'>
          {activeTab === 'games' && <Games />}
          {activeTab === 'history' && <HomeHistory />}
          {activeTab === 'vip' && <HomeVip />}
        </div>

     </div>
   );
 }

export default Home;