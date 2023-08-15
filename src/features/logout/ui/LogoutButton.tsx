import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Paragraph from "../../../shared/ui/Paragraph";
import logoutIcon from "../../../../public/icons/logout.svg";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  color: inherit;
`;

export const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  function logoutFunc(event: any) {
    event.preventDefault();
    logout({ logoutParams: { returnTo: window.location.origin } });
  }

  return (
    <Container onClick={logoutFunc}>
      <img src={logoutIcon} alt="Выйти" />
      <button>
        <Paragraph>Выйти</Paragraph>
      </button>
    </Container>
  );
};
