import React, { useState } from "react";
import styled from "styled-components";
import { CopyLink } from "../features/Copy";
import SwitchPanel from "../shared/ui/switchDisplay/SwitchPanel";
import oneSwitch from "../../public/icons/view-1.svg";
import twoSwitch from "../../public/icons/view-2.svg";
import sidebarState from "../pages/CallPageCustomUI/store/sidebarState";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 57px;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 15px;
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 0 14px;
  align-items: center;
`;

const Title = styled.h1`
  font-family: var(--font);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Paragraph = styled.p`
  font-family: var(--font);
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const styleSwitch = {
  width: "84px",
  height: "48px",
  borderRadius: "35px",
};

const CallInfo: React.FC = () => {
  const [displaySwitch, setDisplaySwitch] = useState(false);

  function changeDisplay(state: boolean) {
    setDisplaySwitch(state);
  }

  return (
    <Container style={sidebarState.isActive ? {} : { paddingRight: "35px" }}>
      <Info>
        <Title>Информатика 4 класс</Title>
        <CopyLink />
        <Paragraph>18 участников|01:12:45 </Paragraph>
      </Info>
      <SwitchPanel
        oneSwitch={oneSwitch}
        twoSwitch={twoSwitch}
        style={styleSwitch}
        onClick={changeDisplay}
        state={displaySwitch}
      />
    </Container>
  );
};

export default CallInfo;
