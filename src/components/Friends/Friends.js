import React, { useState, useEffect } from 'react';
import './Friends.css';
import FriendItem from './FriendsComponents/Friend.js';

import Intro from './FriendsImages/Intro.png';

function Friends() {
  // Если денег 0 то кнопка забрать неактивна
  const cash = 0;

  const [isButtonActive, setIsButtonActive] = useState(false);
  const [friendsCount, setFriendsCount] = useState(0);

  useEffect(() => {
    setIsButtonActive(cash > 0);
  }, [cash]);

  // Считаю сколько друзей внутри списка
  useEffect(() => {
    const container = document.getElementById('friends_list');
    const tags = container.querySelectorAll('.friend_item');
    setFriendsCount(tags.length);
  }, []);

  return (
    <div className="Friends">
      <div className='friends_info'>
        <img src={Intro} alt='friends' />
        <h2 className='friends_title'>Приглашай друзей</h2>
        <div className='f_cash_container'>
          <p className='friends_cash'>{cash} B</p>
          <p className={`get_f_cash_button ${isButtonActive ? 'f_c_active' : ''}`}>Забрать</p>
        </div>
        <p className='friends_desc'>Приглашай друзей и получай 10% прибыли</p>
      </div>

      <p className='friends_counter'>Кол-во друзей: {friendsCount}</p>

      <div className='friends_list' id='friends_list'>
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
      </div>

      <p className='add_friend_button'>Пригласить</p>
    </div>
  );
}

export default Friends;
