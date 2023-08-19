import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(--white, #fff);
  box-shadow: 0px 0px 2px 0px #c5ccd5;
  z-index: 101;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 0.5px solid var(--grey-5, #d5dee8);
`;

const SettingsCallPopup: React.FC = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default SettingsCallPopup;
