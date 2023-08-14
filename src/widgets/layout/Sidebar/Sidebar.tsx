import React, { useState } from "react";
import styled from "styled-components";
import participiantsIcon from "../../../../public/icons/participants.svg";
import participiantsChat from "../../../../public/icons/participants-gray.svg";
import close from "../../../../public/icons/close-participiants.svg";
import store from "../../../pages/CallPageCustomUI/store/sidebarState";
import chatIcon from "../../../../public/icons/chat.svg";
import oneSwitch from "../../../../public/icons/one-switch.svg";
import twoSwitch from "../../../../public/icons/two-switch.svg";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.css";
import { IUser } from "../../../shared/api/models";
import ParticipantsList from "../../ParticipantsList/ParticipantsList";
import SwitchPanel from "../../../shared/ui/switchDisplay/SwitchPanel";

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

const styleSwitch = {
  width: "66px",
  height: "34px",
  borderRadius: "18px",
};

interface Props {
  peopleList: IUser[];
}

const Sidebar: React.FC<Props> = observer(({ peopleList }) => {
  const [displaySwitch, setDisplaySwitch] = useState(false);

  function changeActive() {
    store.isActive
      ? (store.closeSidebar(), store.selectParticipants())
      : store.openSidebar();
  }

  function changeDisplay(state: boolean) {
    setDisplaySwitch(state);
  }

  function changeSelected() {
    store.selected === "chat" ? store.selectParticipants() : store.selectChat();
  }

  return (
    <>
      <OpenButton
        style={store.isActive ? { display: "none" } : { display: "flex" }}
        onClick={changeActive}
      >
        <Image src={participiantsIcon} alt="" />
      </OpenButton>
      <Container
        style={store.isActive ? { display: "flex" } : { display: "none" }}
      >
        <div className={styles.header}>
          <div className={styles.close} onClick={changeActive}>
            <img className={styles.closeImg} src={close} alt="" />
          </div>
          <div className={styles.text}>
            {store.selected === "chat"
              ? "ЧАТ КЛАССА"
              : `УЧАСТНИКИ (${peopleList.length})`}
          </div>
          <img
            className={styles.selected}
            src={store.selected === "chat" ? participiantsChat : chatIcon}
            alt=""
            onClick={changeSelected}
          />
        </div>
        {store.selected === "chat" ? (
          <div></div>
        ) : (
          <>
            <div className={styles.joinedHead}>
              <div className={styles.countJoined}>Подключены (12)</div>
              <SwitchPanel
                oneSwitch={oneSwitch}
                twoSwitch={twoSwitch}
                style={styleSwitch}
                state={displaySwitch}
                onClick={changeDisplay}
              />
            </div>
            <div className={styles.list}>
              <ParticipantsList
                peopleList={peopleList}
                isActive={true}
                displaySwitch={displaySwitch}
              />
            </div>
            <div className={styles.joinedHead}>
              <div className={styles.countJoined}>Не подключены (4)</div>
            </div>
            <div className={styles.list} style={{ maxHeight: "172px" }}>
              <ParticipantsList peopleList={peopleList} isActive={false} />
            </div>
          </>
        )}
      </Container>
    </>
  );
});

export default Sidebar;
