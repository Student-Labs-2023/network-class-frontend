import React, { useEffect, useState } from "react";
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
import _ from "lodash";

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

interface IDevices {
  videoInput: string[];
  audioInput: string[];
  audioOutput: string[];
}

let devicesObj: IDevices;
let intervalSelect: NodeJS.Timer;

const JoinCall: React.FC = () => {
  const [stateEnter, setStateEnter] = useState<State>("Занятие началось");
  const [devices, setDevices] = useState<IDevices>(devicesObj);
  const [isLoading, setLoading] = useState(true);

  console.log(setStateEnter);

  function getDevices() {
    devicesObj = {
      videoInput: [],
      audioInput: [],
      audioOutput: [],
    };
    navigator.mediaDevices
      .enumerateDevices()
      .then(function (devices) {
        devices.forEach(function (device) {
          if (
            device.kind === "videoinput" &&
            !device.label.includes("По умолчанию")
          )
            devicesObj.videoInput.push(device.label);
          else if (
            device.kind === "audioinput" &&
            !device.label.includes("По умолчанию")
          )
            devicesObj.audioInput.push(device.label);
          else if (
            device.kind === "audiooutput" &&
            !device.label.includes("По умолчанию")
          )
            devicesObj.audioOutput.push(device.label);
        });
        _.isEqual(devices, devicesObj) ? "" : setDevices(devicesObj);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      });
  }

  useEffect(() => {
    intervalSelect = setInterval(getDevices, 2500);
    return () => {
      clearInterval(intervalSelect);
    };
  }, []);

  const { id } = useParams();

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
              {isLoading ? (
                <>
                  <SelectDevice title="МИКРОФОН" list={["Загрузка..."]} />
                  <SelectDevice title="КАМЕРА" list={["Загрузка..."]} />
                  <SelectDevice title="ЗВУК" list={["Загрузка..."]} />
                </>
              ) : (
                <>
                  <SelectDevice title="МИКРОФОН" list={devices.audioInput} />
                  <SelectDevice title="КАМЕРА" list={devices.videoInput} />
                  <SelectDevice title="ЗВУК" list={devices.audioOutput} />
                </>
              )}
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
