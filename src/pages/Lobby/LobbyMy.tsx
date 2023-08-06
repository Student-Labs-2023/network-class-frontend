import React, { useEffect } from "react";
import Header from "../../widgets/layout/Header";
import Navbar from "../../widgets/layout/Navbar";
import { CreateRoomForm } from "../../features/createRoom/index.ts";
import RoomsList from "../../widgets/RoomsList";
import { observer } from "mobx-react-lite";
import roomsFormState from "./store/roomsFormState.ts";
// import { useAuth0 } from "@auth0/auth0-react";

const LobbyMy: React.FC = observer(() => {

  useEffect(() => {
    if (localStorage.getItem("trigger") === "create") {
      roomsFormState.openCreateForm();
      localStorage.removeItem("trigger");
    }
  }, []);

  return (
    <>
      <Header />
      <Navbar activeLink="my" />
      {roomsFormState.state === "create" ? <CreateRoomForm /> : <></>}
      <RoomsList />
    </>
  );
});

export default LobbyMy;
