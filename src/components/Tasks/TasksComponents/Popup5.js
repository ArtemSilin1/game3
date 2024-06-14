import React from 'react';
import '../Tasks.css';

import Youtube from '../TasksImages/youtube.svg';
import Close from '../TasksImages/close.svg';

function Popup5({ active, setActive }) {

   const closeModal = () => {
      setActive(false)
   };

   return (
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
         <div className={active ? "modal_box active" : "modal_box"} onClick={e => e.stopPropagation()}>
            <div className='popup_header'>
               <img alt='cross' src={Close} className='close_button' onClick={closeModal} />
            </div>
            <img alt='tg' src={Youtube} width='55px' height='55px' />
            <h3 className='popup_title'>Подписаться на youtube</h3>
            <p className='popup_undertitle'>Подпишитесь на youtube чтобы получить бонус</p>

            <p className='add_friend_button'>Подписаться</p>
            <p className='reward_for_task'>+ 500 B</p>
            <p className='add_friend_button'>Проверить</p>
         </div>
      </div>
   );
}
export default Popup5;