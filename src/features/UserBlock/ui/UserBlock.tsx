import React from "react";
import styled from "styled-components";
import defaultAvatar from "../../../../public/icons/avatar.svg";
import micro from "../../../../public/icons/microphone-mini.svg";
import monitor from "../../../../public/icons/monitor-mini.svg";

const Container = styled.div`
  border-radius: 8px;
  min-width: 276px;
  min-height: 170px;
  position: relative;
`;

const Info = styled.div`
  display: flex;
  height: 28px;
  max-width: 100%;
  padding: 0px 6px;
  align-items: center;
  gap: 4px;
  border-radius: 0px 20px 20px 0px;
  background: rgba(95, 106, 119, 0.6);
  position: absolute;
  left: 0;
  bottom: 5px;
`;

const Text = styled.div`
  font-family: var(--font);
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  background: linear-gradient(
    90deg,
    var(--white) 0,
    var(--white) 95%,
    transparent 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  padding-right: 5px;
`;

const Image = styled.img`
  display: flex;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
`;

interface Props {
  avatar?: string;
  name: string;
}

export const UserBlock: React.FC<Props> = ({ avatar, name }) => {
  return (
    <Container
      style={
        avatar
          ? {
              background: `#d5dee8 url(${avatar}) center / 66px 66px no-repeat`,
            }
          : {
              background: `#d5dee8 url(${defaultAvatar}) center / 66px 66px no-repeat`,
            }
      }
    >
      <Info>
        <Text>{name}</Text>
        <Image src={micro} alt="" />
        <Image src={monitor} alt="" />
      </Info>
    </Container>
  );
};
