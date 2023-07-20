import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import Join from "../pages/Join/Join";
import Lobby from "../pages/Lobby/Lobby";
import LobbyAccess from "../pages/Lobby/LobbyAccess";
import LobbyMy from "../pages/Lobby/LobbyMy";
import JoinCall from "../pages/JoinCall/JoinCall";
import CallPage from '../pages/CallPage/CallPage';
import Loader from "../shared/ui/loader/Loader";
import { useAuth0 } from "@auth0/auth0-react";

const App: React.FC = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect();
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/lobby/access" element={<LobbyAccess />} />
          <Route path="/lobby/my" element={<LobbyMy />} />
          <Route path="/joinlesson/:id" element={<JoinCall />} />
          <Route path="/lesson" element={<CallPage />} />
        </Routes>
      )}
    </>
  );
};

export default App;
