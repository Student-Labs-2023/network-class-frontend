import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import Join from "../pages/Join/Join";
import Lobby from "../pages/Lobby/Lobby";
import JoinCall from "../pages/JoinCall/JoinCall";
import CallPage from "../pages/CallPage/CallPage";
import CallPageUI from "../pages/CallPageCustomUI/CallPage";
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
          <Route path="/joinlesson/:id" element={<JoinCall />} />
          <Route path="/lesson/:id" element={<CallPage />} />
          <Route path="/lesson-ui" element={<CallPageUI/>} />
        </Routes>
      )}
    </>
  );
};

export default App;
