import React from 'react';
import type { IRoom } from '../../shared/api/models';
import Header from '../../widgets/layout/Header';
import Navbar from '../../widgets/layout/Navbar';
import RoomsList from '../../widgets/RoomsList';

const LobbyAccess: React.FC = () => {
  const rooms: IRoom[] = [
    {
        id: 1,                
        title: 'Информатика 5 класс',
        owner: 'Иванов Иван Иванович',
        isActive: true,
    },
    {
        id: 2,            
        title: 'Математика 7 класс',
        owner: 'Морозов Антон Дмитри...',
        isActive: true,
    },
    {
        id: 3,
        title: 'Английский и язык 7 кла... ',
        owner: 'Иванова Мария Ивановна',
        isActive: false,
    },
    {
        id: 4,
        title: 'Математика 8 класс',
        owner: 'Иванова Мария Ивановна',
        isActive: false,
    },
    {
        id: 5,
        title: 'Математика 8 класс',
        owner: 'Иванова Мария Ивановна',
        isActive: false,
    },
    {
        id: 6,
        title: 'Математика 8 класс',
        owner: 'Иванова Мария Ивановна',
        isActive: false,
    },
    {
      id: 7,                
      title: 'Информатика 5 класс',
      owner: 'Иванов Иван Иванович',
      isActive: true,
    },
    {
        id: 8,            
        title: 'Математика 7 класс',
        owner: 'Морозов Антон Дмитри...',
        isActive: true,
    },
    {
        id: 9,
        title: 'Английский и язык 7 кла... ',
        owner: 'Иванова Мария Ивановна',
        isActive: false,
    },
    {
        id: 10,
        title: 'Математика 8 класс',
        owner: 'Иванова Мария Ивановна',
        isActive: false,
    },
    {
        id: 11,
        title: 'Математика 8 класс',
        owner: 'Иванова Мария Ивановна',
        isActive: false,
    },
    {
        id: 12,
        title: 'Математика 8 класс',
        owner: 'Иванова Мария Ивановна',
        isActive: false,
    },
    {
        id: 13,
        title: 'Математика 8 класс',
        owner: 'emilnovikov392@gmail.com',
        isActive: false,
    },
  ];
  
  return (
    <>
      <Header/>
      <Navbar activeLink='access' accessLength={5}/>
      <RoomsList rooms={rooms}/>
    </>
  )
}

export default LobbyAccess