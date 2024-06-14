import React from 'react';
import '../Friends.css';

import Avatar from '../FriendsImages/Avatar.svg';

function FriendItem() {
  return (
    <div className="friend_item">
      <img src={Avatar} alt='avatar' />
      <div className='friend_info'>
         <p className='friend_name'>NickName</p>
         <p className='friend_status'>Status</p>
      </div>
      <p className='friend_bonus'>+ 500 B</p>
    </div>
  );
 }
 
 export default FriendItem;