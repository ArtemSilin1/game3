import React, { useState } from 'react';
import '../Home.css';

function HistoryItem({ user_id, transaction_type, amount, status }) {

    const [doneStatus] = useState(status);

   return (
     <ul className="HistoryItem">
         <li className='history_i_item'>
            <p className='h_i_title'>UserID</p>
            <p className='user_info'>{user_id}</p>
         </li>
         <li className='history_i_item'>
            <p className='h_i_title'>Тип</p>
            <p className='user_info'>{transaction_type}</p>
         </li>
         <li className='history_i_item'>
            <p className='h_i_title'>Сумма</p>
            <p className='user_info'>{amount}</p>
         </li>
         <li className='history_i_item'>
            <p className='h_i_title'>Статус</p>
            <p className={`user_info ${doneStatus === 'Успешно' ? 'done' : 'error'}`}>{status}</p>
         </li>
     </ul>
   );
 }
 
 export default HistoryItem;
