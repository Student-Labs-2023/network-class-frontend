import React from "react";
import styled from "styled-components";
import settingsState from "../../../pages/CallPageCustomUI/store/settingsState";
import { observer } from "mobx-react-lite";
import FormButton from "../../../shared/ui/formButton/FormButton";
import SettingsMy from "../../SettingsMy/SettingsMy";
import SettingsClass from "../../SettingsClass/SettingsClass";

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-radius: 8px;
  background: var(--white, #fff);
  box-shadow: 0px 0px 2px 0px #c5ccd5;
  z-index: 101;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 0.5px solid var(--grey-5, #d5dee8);
`;

const HeaderText = styled.div`
  display: flex;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 10px;
  color: var(--grey-1, #5f6a77);
  font-family: var(--font);
  font-size: 20px;
  font-weight: 400;
  line-height: normal;

  &:hover {
    cursor: pointer;
  }
`;

const Settings = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Back = styled.button`
  color: var(--grey-1, #5f6a77);
  font-family: var(--font);
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
`;

const styleSelected = {
  color: "var(--blue, #175EF1)",
  fontWeight: 600,
};

const SettingsCallPopup: React.FC = observer(() => {
  function openMy() {
    settingsState.selectMy();
  }

  function openClass() {
    settingsState.selectClass();
  }

  return (
    <Container>
      <Header>
        <HeaderText
          style={settingsState.selected === "My" ? styleSelected : {}}
          onClick={openMy}
        >
          Мои настройки
        </HeaderText>
        <HeaderText
          style={settingsState.selected === "Class" ? styleSelected : {}}
          onClick={openClass}
        >
          Настройки класса
        </HeaderText>
      </Header>
      <Settings>
        {settingsState.selected === "My" && <SettingsMy />}
        {settingsState.selected === "Class" && <SettingsClass />}
      </Settings>
      <Buttons>
        <FormButton>Сохранить</FormButton>
        <Back>Отмена</Back>
      </Buttons>
    </Container>
  );
});

export default SettingsCallPopup;
