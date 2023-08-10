import React, { useState } from "react";
import styled from "styled-components";
import participiants from "../../../../public/icons/participants.svg";
import closeParts from "../../../../public/icons/close-participiants.svg";
import storeParticipants from "../../../pages/CallPageCustomUI/store/participants";
import storeChat from "../../../pages/CallPageCustomUI/store/chat";
import chat from "../../../../public/icons/chat.svg";
import oneSwitch from "../../../../public/icons/one-switch.svg";
import twoSwitch from "../../../../public/icons/two-switch.svg";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.css";
import { IUser } from "../../../shared/api/models";
import ParticipantsList from "../../ParticipantsList/ParticipantsList";

const OpenButton = styled.div`
  position: absolute;
  right: 0;
  top: 21px;
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0px 0px 10px;
  background: var(--orange, #f90);
  box-shadow: 0px 0px 2px 0px #c5ccd5;

  &:hover {
    cursor: pointer;
    background: linear-gradient(135deg, #f90 0%, rgba(255, 153, 0, 0.7) 100%);
  }
`;

const Image = styled.img`
  width: 34px;
  height: 34px;
`;

const Container = styled.div`
  flex: 0 0 373px;
  display: none;
  flex-direction: column;
  padding-top: 30px;
  align-items: center;
  row-gap: 26px;
  flex-wrap: nowrap;
  border-left: 0.5px solid var(--grey-5, #d5dee8);
  background: rgba(255, 255, 255, 0.95);
`;

interface Props {
  peopleList: IUser[];
}

const Sidebar: React.FC<Props> = observer(({ peopleList }) => {
  const [active, setActive] = useState(false);
  const [displaySwitch, setDisplaySwitch] = useState(false);

  function changeActive() {
    active
      ? storeParticipants.closeParticipants()
      : storeParticipants.openParticipants();
    setActive(!active);
  }

  function rightDisplay() {
    setDisplaySwitch(true);
  }

  function leftDisplay() {
    setDisplaySwitch(false);
  }

  function openChat() {
    storeChat.openChat();
  }

  return (
    <>
      <OpenButton
        style={active ? { display: "none" } : { display: "flex" }}
        onClick={changeActive}
      >
        <Image src={participiants} alt="" />
      </OpenButton>
      <Container style={active ? { display: "flex" } : { display: "none" }}>
        <div className={styles.header}>
          <div
            className={styles.close}
            style={active ? { display: "flex" } : { display: "none" }}
            onClick={changeActive}
          >
            <img className={styles.closeImg} src={closeParts} alt="" />
          </div>
          <div className={styles.text}>УЧАСТНИКИ (14)</div>
          <img className={styles.chat} src={chat} alt="" onClick={openChat} />
        </div>
        <div className={styles.joinedHead}>
          <div className={styles.countJoined}>Подключены (12)</div>
          <div className={styles.switchPanel}>
            <div
              className={
                displaySwitch
                  ? styles.switch
                  : styles.switch + " " + styles.active
              }
              onClick={leftDisplay}
            >
              <img src={oneSwitch} alt="" />
            </div>
            <div
              className={
                displaySwitch
                  ? styles.switch + " " + styles.active
                  : styles.switch
              }
              onClick={rightDisplay}
            >
              <img src={twoSwitch} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.list}>
          <ParticipantsList peopleList={peopleList} isActive={true} />
        </div>
        <div className={styles.joinedHead}>
          <div className={styles.countJoined}>Не подключены (2)</div>
        </div>
        <div className={styles.list} style={{ maxHeight: "172px" }}>
          <ParticipantsList peopleList={peopleList} isActive={false} />
        </div>
      </Container>
    </>
  );
});

export default Sidebar;
