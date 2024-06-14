import React from 'react';
import '../Home.css';
import HistoryItem from './HistoryItem.js';

function HomeHistory() {
   return (
     <div className="HomeHistory">
          <HistoryItem
            user_id='547184746'
            transaction_type='Отправка'
            amount='5,000.00 B'
            status='Успешно'
          />
         
          <HistoryItem
            user_id='547184746'
            transaction_type='Отправка'
            amount='5,000.00 B'
            status='Ошибка'
          />

          <HistoryItem
            user_id='547184746'
            transaction_type='Отправка'
            amount='5,000.00 B'
            status='Успешно'
          />
         
          <HistoryItem
            user_id='547184746'
            transaction_type='Отправка'
            amount='5,000.00 B'
            status='Ошибка'
          />

          <HistoryItem
            user_id='547184746'
            transaction_type='Отправка'
            amount='5,000.00 B'
            status='Успешно'
          />
         
          <HistoryItem
            user_id='547184746'
            transaction_type='Отправка'
            amount='5,000.00 B'
            status='Ошибка'
          />

     </div>
   );
 }
 
 export default HomeHistory;