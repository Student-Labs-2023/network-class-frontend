import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: var(--bg);
  border-top: 0.5px solid var(--grey-5, #d5dee8);
`;

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

interface Props {
  children?: React.ReactNode;
}

const ControllersWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default ControllersWrapper;
