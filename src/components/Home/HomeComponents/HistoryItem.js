import React, { useState } from 'react';
import '../Home.css';

function HistoryItem({ user_id, transaction_type, amount, status }) {

    const [doneStatus, setDoneStatus] = useState(status);

   return (
     <ul className="HistoryItem">
         <li className='history_i_item'>
            <p className='h_i_title'>UserID</p>
            <p className='user_info'>{user_id}</p>
         </li>
         <li className='history_i_item'>
            <p className='h_i_title'>Type</p>
            <p className='user_info'>{transaction_type}</p>
         </li>
         <li className='history_i_item'>
            <p className='h_i_title'>Amount</p>
            <p className='user_info'>{amount}</p>
         </li>
         <li className='history_i_item'>
            <p className='h_i_title'>Status</p>
            <p className={`user_info ${doneStatus === 'done' ? 'done' : 'error'}`}>{status}</p>
         </li>
     </ul>
   );
 }
 
 export default HistoryItem;
