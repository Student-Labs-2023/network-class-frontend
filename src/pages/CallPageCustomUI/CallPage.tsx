import React from "react";
import styled from "styled-components";
import CallInfo from "../../widgets/CallInfo";
import CallControllers from "../../widgets/CallControllers";
import UserGrid from "../../widgets/UserGrid/UserGrid";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  background: var(--white);
`;

//calc((100% - 1440px) / 2)

const CallPAge: React.FC = () => {
  return (
    <Container>
      <CallInfo></CallInfo>
      <UserGrid />
      <CallControllers />
    </Container>
  );
};

export default CallPAge;
