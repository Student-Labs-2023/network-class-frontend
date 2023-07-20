import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  right: 0;
  height: 100%;
  width: 122px;
  text-align: center;
  border-radius: 8px;
  line-height: 1.5;
  background: #f90;
  box-shadow: 0px 2px 6px 0px var(--grey_4);
  color: var(--white);
  font-family: var(--font);
  font-size: 22px;
  font-weight: 500;

  &:hover,
  &:active {
    background: #ffb240;
  }
`;

export const EnterAccountButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Button onClick={() => loginWithRedirect()}>Войти</Button>
    </>
  );
};
