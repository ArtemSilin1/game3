import React from 'react';

import Close from '../RatingImages/close.svg';

function Popup1({ active, setActive }) {

   const closeModal = () => {
      setActive(false)
   };

   return (
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
         <div className={active ? "modal_box active" : "modal_box"} onClick={e => e.stopPropagation()}>
            <div className='popup_header'>
               <img alt='cross' src={Close} className='close_button' onClick={closeModal} />
            </div>
            <h2>Таблица бонусов</h2>
            <p className='popup_info_description'>Ежедневно мы разыгрываем 2,000 B среди игроков! В топ засчитывает общая  сумма выигрышных ставок</p>
            <div className='conditions'>
               <p>TOP 1 -> 1,000 B</p>
               <p>TOP 2 -> 500 B</p>
               <p>TOP 3 -> 250 B</p>
               <p>TOP 4-10 -> 200 B</p>
               <p>TOP 11-50 -> 50 B</p>
            </div>
         </div>
      </div>
   );
}
export default Popup1;