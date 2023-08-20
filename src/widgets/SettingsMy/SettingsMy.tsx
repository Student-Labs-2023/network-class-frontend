import React, { useState } from "react";
import styled from "styled-components";
import { SelectDevice } from "../../features/DeviceSetting";
import { useAuth0 } from "@auth0/auth0-react";

const Input = styled.input`
  display: flex;
  width: 100%;
  min-height: 54px;
  padding: 4px 0px 4px 16px;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  border: 1.5px solid var(--blue);
  margin-bottom: 10px;
  color: var(--black, #000);
  font-family: var(--font);
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

const Title = styled.label`
  position: absolute;
  top: -9px;
  left: 14px;
  color: var(--blue, #175ef1);
  background: white;
  padding: 0 5px;
  font-family: var(--font);
  font-size: 18px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
`;

const stylesText = {
  color: "var(--black, #000)",
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "normal",
};

const stylesBlock = {
  border: "1px solid var(--grey-5, #D5DEE8)",
  boxShadow: "none",
};

const stylesList = {
  border: "1px solid var(--grey-5, #D5DEE8)",
  boxShadow: "none",
};

const stylesContainer = {
  flex: "0 0",
};

const SettingsMy: React.FC = () => {
  const { user } = useAuth0();
  const [name, setName] = useState(user?.name);

  return (
    <>
      <div style={{ position: "relative", marginTop: "8px" }}>
        <Title>Имя в классе</Title>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
      </div>
      <SelectDevice
        title="Микрофон"
        list={[]}
        stylesText={stylesText}
        stylesBlock={stylesBlock}
        stylesList={stylesList}
        stylesContainer={stylesContainer}
      ></SelectDevice>
      <SelectDevice
        title="Звук"
        list={[]}
        stylesText={stylesText}
        stylesBlock={stylesBlock}
        stylesList={stylesList}
        stylesContainer={stylesContainer}
      ></SelectDevice>
      <SelectDevice
        title="Камера"
        list={[]}
        stylesText={stylesText}
        stylesBlock={stylesBlock}
        stylesList={stylesList}
        stylesContainer={stylesContainer}
      ></SelectDevice>
    </>
  );
};

export default SettingsMy;
