import React from "react";
import styled from "styled-components";
import { SettingClassLayout } from "../layout/SettingClassLayout";
import SwitchButton from "../../shared/ui/switchButton/SwitchButton";

const Setting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

const SettingText = styled.div`
  color: var(--black, #000);
  font-family: var(--font);
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

const SettingsClass: React.FC = () => {
  return (
    <>
      <SettingClassLayout title="Демонстрация">
        <>
          <Setting>
            <SettingText>
              Разрешить участникам видеть все демонстрации
            </SettingText>
            <SwitchButton />
          </Setting>
          <Setting>
            <SettingText>
              Разрешить участникам выбирать вкладку для показа
            </SettingText>
            <SwitchButton />
          </Setting>
        </>
      </SettingClassLayout>
      <SettingClassLayout title="Камера">
        <>
          <Setting>
            <SettingText>Разрешить участникам использовать камеру</SettingText>
            <SwitchButton />
          </Setting>
        </>
      </SettingClassLayout>
      <SettingClassLayout title="Микрофон">
        <>
          <Setting>
            <SettingText>
              Разрешить участникам использовать микрофон
            </SettingText>
            <SwitchButton />
          </Setting>
        </>
      </SettingClassLayout>
      <SettingClassLayout title="Запись">
        <>
          <Setting>
            <SettingText>Разрешить участникам записывать встречи</SettingText>
            <SwitchButton />
          </Setting>
        </>
      </SettingClassLayout>
    </>
  );
};

export default SettingsClass;
