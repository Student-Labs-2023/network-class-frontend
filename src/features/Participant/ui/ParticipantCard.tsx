import React from "react";
import styled from "styled-components";
import handUp from "../../../../public/icons/hand-up-mini.svg";
import microOn from "../../../../public/icons/microphone-mini-gray-on.svg";
import cameraOn from "../../../../public/icons/camera-mini-gray-on.svg";
import monitorOff from "../../../../public/icons/monitor-mini-gray-off.svg";

const Container = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 206px;
  overflow: hidden;
  position: relative;
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 10px;
    background: linear-gradient(90deg, transparent 0, #fff 100%);
    content: "";
  }
`;

const Text = styled.div`
  color: #000;
  font-family: var(--font);
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
`;

const ControllerInfo = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
`;

interface Props {
  avatar: string;
  name: string;
  isActive: boolean;
}

export const ParticipantCard: React.FC<Props> = ({
  avatar,
  name,
  isActive,
}) => {
  return (
    <Container>
      <UserInfo>
        <img src={avatar} alt="" style={{ width: "44px", height: "44px" }} />
        <Text>{name}</Text>
      </UserInfo>
      {isActive ? (
        <div style={{ display: "flex" }}>
          <ControllerInfo>
            <img src={handUp} alt="" style={{ paddingRight: "2px" }} />
          </ControllerInfo>
          <ControllerInfo>
            <img src={microOn} alt="" />
          </ControllerInfo>
          <ControllerInfo>
            <img src={cameraOn} alt="" />
          </ControllerInfo>
          <ControllerInfo>
            <img src={monitorOff} alt="" />
          </ControllerInfo>
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};
