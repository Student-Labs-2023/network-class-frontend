import React from "react";
import styled from "styled-components";
import CallInfo from "../../widgets/CallInfo";
import CallControllers from "../../widgets/CallControllers";
import UserGrid from "../../widgets/UserGrid/UserGrid";
import { IUser } from "../../shared/api/models";
import avatar from "../../../public/icons/avatar.svg";
import Sidebar from "../../widgets/layout/Sidebar/Sidebar";
import storeSidebar from "./store/sidebarState";
import { observer } from "mobx-react-lite";
import settingsState from "./store/settingsState";
import SettingsCallPopup from "../../widgets/layout/SettingsCallPopup/SettingsCallPopup";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  background: var(--white);
  overflow: hidden;
`;

const Content = styled.div`
  flex: 0 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 48px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  transition: all 0.3s ease-out;
`;

const Overlay = styled.div`
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  z-index: 100;
`;

const peopleList: IUser[] = [
  {
    email: "jjj",
    email_verified: true,
    name: "Пышненко Дмитрий Алексеевич",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
];

const CallPage: React.FC = observer(() => {
  function closePopup() {
    settingsState.closeSettings();
  }

  return (
    <Container>
      <Content
        style={
          storeSidebar.isActive
            ? { width: "calc(100vw - 373px)" }
            : { width: "100vw" }
        }
      >
        <CallInfo></CallInfo>
        <UserGrid peopleList={peopleList} />
        <CallControllers />
      </Content>
      <Sidebar peopleList={peopleList} />
      {settingsState.isActive && <SettingsCallPopup />}
      {settingsState.isActive && <Overlay onClick={closePopup} />}
    </Container>
  );
});

export default CallPage;
