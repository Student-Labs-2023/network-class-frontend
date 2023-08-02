import React from 'react';
import styled from 'styled-components';
import { CopyLink } from '../features/Copy';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 57px;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
`

const Info = styled.div`
  display: grid;
  width: 295px;
  grid-template-columns: 255px 18px;
  gap: 0 14px;
  align-items: center;
`

const Title = styled.h1`
  font-family: var(--font);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const Paragraph = styled.p`
  font-family: var(--font);
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`

const CallInfo: React.FC = () => {
  return (
    <Container>
      <Info>
        <Title>Информатика 4 класс</Title>
        <CopyLink/>
        <Paragraph>18 участников|01:12:45 </Paragraph>
      </Info>
    </Container>
  )
}

export default CallInfo;
