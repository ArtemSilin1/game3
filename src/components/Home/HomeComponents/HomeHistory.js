import React from 'react';
import '../Home.css';
import HistoryItem from './HistoryItem.js';

function HomeHistory() {
   return (
     <div className="HomeHistory">
          <HistoryItem
            user_id='547184746'
            transaction_type='send'
            amount='5,000.00 B'
            status='done'
          />
         
         <HistoryItem
            user_id='547184746'
            transaction_type='send'
            amount='5,000.00 B'
            status='error'
          />

          <HistoryItem
            user_id='547184746'
            transaction_type='send'
            amount='5,000.00 B'
            status='done'
          />

          <HistoryItem
            user_id='547184746'
            transaction_type='send'
            amount='5,000.00 B'
            status='done'
          />

          <HistoryItem
            user_id='547184746'
            transaction_type='send'
            amount='5,000.00 B'
            status='done'
          />

          <HistoryItem
            user_id='547184746'
            transaction_type='send'
            amount='5,000.00 B'
            status='error'
          />

          <HistoryItem
            user_id='547184746'
            transaction_type='send'
            amount='5,000.00 B'
            status='error'
          />

          <HistoryItem
            user_id='547184746'
            transaction_type='send'
            amount='5,000.00 B'
            status='done'
          />
     </div>
   );
 }
 
 export default HomeHistory;