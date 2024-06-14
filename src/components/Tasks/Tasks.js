import React, {useState} from 'react';
import './Tasks.css';
import Popup1 from './TasksComponents/Popup1.js';
import Popup2 from './TasksComponents/Popup2.js';
import Popup3 from './TasksComponents/Popup3.js';
import Popup4 from './TasksComponents/Popup4.js';
import Popup5 from './TasksComponents/Popup5.js';

import TasksIntro  from './TasksImages/TasksIntro.png';
import Tg from './TasksImages/tg.svg';
import Insta from './TasksImages/insta.svg';
import X from './TasksImages/x.svg';
import Youtube from './TasksImages/youtube.svg';
import Go from './TasksImages/Go.svg';

function Tasks() {

  const [modalActive1, setModalActive1] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const [modalActive3, setModalActive3] = useState(false);
  const [modalActive4, setModalActive4] = useState(false);
  const [modalActive5, setModalActive5] = useState(false);


  return (
    <div className="Tasks">
      <img src={TasksIntro} alt='intro' />
      <h2>Доступно 3 задания</h2>
      <p className='tasks_undertitle'>Выполняй задания и получай за них очки</p>

      <ul className='tasks_list'>

        <li className='tasks_list_item' onClick={() => setModalActive1(true)}>
          <img src={Tg} alt='tg' className='social_icon' />
          <div className='t_l_item_info'>
            <p>Подписаться на канал</p>
            <p>+ 500 B</p>
          </div>
          <img src={Go} alt='go' />
        </li>

        <li className='tasks_list_item' onClick={() => setModalActive2(true)}>
          <img src={Tg} alt='tg' className='social_icon' />
          <div className='t_l_item_info'>
            <p>Вступить в группу</p>
            <p>+ 500 B</p>
          </div>
          <img src={Go} alt='go' />
        </li>

        <li className='tasks_list_item' onClick={() => setModalActive3(true)}>
          <img src={X} alt='tg' className='social_icon' />
          <div className='t_l_item_info'>
            <p>Вступить в X</p>
            <p>+ 500 B</p>
          </div>
          <img src={Go} alt='go' />
        </li>

        <li className='tasks_list_item' onClick={() => setModalActive4(true)}>
          <img src={Insta} alt='tg' className='social_icon' />
          <div className='t_l_item_info'>
            <p>Подписаться в Instagram</p>
            <p>+ 500 B</p>
          </div>
          <img src={Go} alt='go' />
        </li>

        <li className='tasks_list_item' onClick={() => setModalActive5(true)}>
          <img src={Youtube} alt='tg' className='social_icon' />
          <div className='t_l_item_info'>
            <p>Подписаться в Youtube</p>
            <p>+ 500 B</p>
          </div>
          <img src={Go} alt='go' />
        </li>

      </ul>

      <Popup1 active={modalActive1} setActive={setModalActive1} />
      <Popup2 active={modalActive2} setActive={setModalActive2} />
      <Popup3 active={modalActive3} setActive={setModalActive3} />
      <Popup4 active={modalActive4} setActive={setModalActive4} />
      <Popup5 active={modalActive5} setActive={setModalActive5} />
    </div>
  );
}
 export default Tasks;