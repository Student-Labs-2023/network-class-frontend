import React from "react";
import { styled } from "styled-components";
import settingsIcon from "../../../../public/icons/setting-mini.svg";
import Paragraph from "../../../shared/ui/Paragraph";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  color: inherit;
`;

export const EnterProfileButton: React.FC = () => {
  function enterProfile() {
    window.location.href = "/profile";
  }

  return (
    <Container onClick={enterProfile}>
      <img src={settingsIcon} alt="Настройки" />
      <Paragraph>Настройки профиля</Paragraph>
    </Container>
  );
};
