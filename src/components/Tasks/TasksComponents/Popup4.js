import React from 'react';
import '../Tasks.css';

import Insta from '../TasksImages/insta.svg';
import Close from '../TasksImages/close.svg';

function Popup4({ active, setActive }) {

   const closeModal = () => {
      setActive(false)
   };

   return (
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
         <div className={active ? "modal_box active" : "modal_box"} onClick={e => e.stopPropagation()}>
            <div className='popup_header'>
               <img alt='cross' src={Close} className='close_button' onClick={closeModal} />
            </div>
            <img alt='tg' src={Insta} width='55px' height='55px' />
            <h3 className='popup_title'>Подписаться на Instagram</h3>
            <p className='popup_undertitle'>Подпишитесь на Instagram чтобы получить бонус</p>

            <p className='add_friend_button'>Подписаться</p>
            <p className='reward_for_task'>+ 500 B</p>
            <p className='add_friend_button'>Проверить</p>
         </div>
      </div>
   );
}
export default Popup4;