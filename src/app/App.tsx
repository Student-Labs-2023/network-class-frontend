import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import Join from '../pages/Join';
import Lobby from '../pages/Lobby/Lobby';


const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Join/>}/>
      <Route path='/lobby' element={<Lobby/>}/>
    </Routes>
  )
}

export default App;
