import React from "react";
import styled from "styled-components";
import { SettingClassLayout } from "../layout/SettingClassLayout";

const Setting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
          </Setting>
        </>
      </SettingClassLayout>
    </>
  );
};

export default SettingsClass;
