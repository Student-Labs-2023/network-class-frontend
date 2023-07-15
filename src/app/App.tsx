import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import Join from '../pages/Join';
import Lobby from '../pages/Lobby/Lobby';
import LobbyAccess from '../pages/Lobby/LobbyAccess';
import LobbyMy from '../pages/Lobby/LobbyMy';


const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Join/>}/>
      <Route path='/lobby' element={<Lobby/>}/>
      <Route path='/lobby/access' element={<LobbyAccess/>}/>
      <Route path='/lobby/my' element={<LobbyMy/>}/>
    </Routes>
  )
}

export default App;
