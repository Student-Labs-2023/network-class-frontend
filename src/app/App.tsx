import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import Join from "../pages/Join/Join";
import Lobby from "../pages/Lobby/Lobby";
import LobbyAccess from "../pages/Lobby/LobbyAccess";
import LobbyMy from "../pages/Lobby/LobbyMy";
import CallPage from "../pages/CallPage/CallPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/lobby/access" element={<LobbyAccess />} />
      <Route path="/lobby/my" element={<LobbyMy />} />
      <Route path="/lesson" element={<CallPage />} />
    </Routes>
  );
};

export default App;
