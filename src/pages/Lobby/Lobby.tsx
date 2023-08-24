import React from 'react';
import { observer } from 'mobx-react-lite';
import navbarState from './store/navbarState';
import roomsFormState from './store/roomsFormState';
import Header from '../../widgets/layout/Header';
import Navbar from '../../widgets/layout/Navbar';
import { CreateRoomForm } from '../../features/createRoom';
import RoomsList from '../../widgets/RoomsList';

const Lobby: React.FC = observer(() => {

  const roomsFormStateLS = localStorage.getItem("trigger");
  
  return (
    <>
      <Header/>
      <Navbar/>
      {roomsFormState.state || roomsFormStateLS === 'create' && navbarState.state === 'my' ? <CreateRoomForm/> : null}
      <RoomsList />
    </>
  )
})

export default Lobby;
