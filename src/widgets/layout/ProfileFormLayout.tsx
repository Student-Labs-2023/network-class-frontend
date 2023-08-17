import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background: var(--white);
  box-shadow: 0px 0px 4px 0px #e5eaf8;
  font-family: var(--font);
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface Props {
  children?: React.ReactNode;
}

const ProfileFormLayout: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ProfileFormLayout;
