import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 57px;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    border: 1px #000 solid;
`

const CallInfo: React.FC = () => {
  return (
    <Container>
        Call Info
    </Container>
  )
}

export default CallInfo;
