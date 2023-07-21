import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../widgets/layout/Header";
import { styled } from "styled-components";
import { BackButton } from "../../features/Back";
import CheckDevices from "../../widgets/CheckDevices/CheckDevices";
import avatar from "../../../public/icons/avatar.svg";
import styles from "./styles.module.css";
import { CopyLink } from "../../features/Copy";
import EnterButton from "../../shared/ui/EnterButton";
import { SelectDevice } from "../../features/DeviceSetting";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  min-height: 100%;
`;

const Container = styled.div`
  background: var(--grey_6);
  flex: 1 1;
  padding: 20px 106px 0 123px;
`;

const Content = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 130px;
`;

type State =
  | "Занятие началось"
  | "Дождитесь разрешения на подключение"
  | "Владельца класса нет в сети"
  | "Ваш запрос на подключение отклонен";

const JoinCall: React.FC = () => {
  const [stateEnter, setStateEnter] = useState<State>("Занятие началось");

  console.log(setStateEnter);

  const devices: string[][] = [
    ["hghghg", "jhhhhhhhh"],
    ["qqqqqq", "qvvhhhhhhhhhrrrrrrrrr", "rr"],
    [],
  ];

  const {id} = useParams();

  function joinLesson() {
    location.href = `/lesson/${id}`;
  }

  return (
    <Page>
      <Header />
      <Container>
        <BackButton />
        <Content>
          <div className={styles.settings}>
            <div className={styles.video}>
              <CheckDevices />
            </div>
            <div className={styles.settingsVideo}>
              <SelectDevice title="МИКРОФОН" list={devices[0]} />
              <SelectDevice title="КАМЕРА" list={devices[1]} />
              <SelectDevice title="ЗВУК" list={devices[2]} />
            </div>
          </div>
          <div className={styles.info}>
            <img src={avatar} alt="" style={{ height: "86px" }} />
            <div>
              <div className={styles.title}>Математика 7 класс</div>
              <CopyLink />
            </div>
            <div className={styles.owner}>Морозов Антон Дмитриевич</div>
            <div className={styles.count}>0 участников</div>
            <div style={{ textAlign: "center" }}>
              <EnterButton onClick={joinLesson}>Присоединиться</EnterButton>
              {stateEnter === "Занятие началось" ||
              stateEnter === "Дождитесь разрешения на подключение" ? (
                <div className={styles.stateOn}>{stateEnter}</div>
              ) : (
                <div className={styles.stateOff}>{stateEnter}</div>
              )}
            </div>
          </div>
        </Content>
      </Container>
    </Page>
  );
};

export default JoinCall;
