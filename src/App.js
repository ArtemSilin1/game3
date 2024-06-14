import React from 'react';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';

import Rating from './components/Rating/Rating.js';
import Home from './components/Home/Home.js';
import Tasks from './components/Tasks/Tasks.js';
import Friends from './components/Friends/Friends.js';

import StarIcon from './AppIcons/star.svg';
import HomeIcon from './AppIcons/home.svg';
import TasksIcon from './AppIcons/task.svg';
import FriendsIcon from './AppIcons/friends.svg';

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rating' element={<Rating />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/friends' element={<Friends />} />
        </Routes>

        <ul className='navigation'>
          <li className='navigation_item'>
            <NavLink to='/rating' className='nav_link'>
              <img alt='' src={StarIcon} className='nav_image' />
              <p className='nav_text'>Рейтинг</p>
            </NavLink>
          </li>

          <li className='navigation_item'>
          <NavLink to='/' className='nav_link'>
            <img alt='' src={HomeIcon} className='nav_image' />
            <p className='nav_text'>Домой</p>
          </NavLink>
          </li>

          <li className='navigation_item'>
            <NavLink to='/tasks' className='nav_link'>
              <img alt='' src={TasksIcon} className='nav_image' />
              <p className='nav_text'>Задания</p>
            </NavLink>
          </li>

          <li className='navigation_item'>
            <NavLink to='/friends' className='nav_link'>
              <img alt='' src={FriendsIcon} className='nav_image' />
              <p className='nav_text'>Друзья</p>
            </NavLink>
          </li>
        </ul>

    </div>
  );
}

export default App;
