import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;

  padding: 20px 16px 16px;
  border-radius: 0px 0px 10px 10px;
  background: var(--white);
  box-shadow: 5px 5px 10px 0px var(--grey_5);
  transition: all .3s ease;
`

const Content = styled.div`

`

interface Props {
  children?: React.ReactNode,
  active: boolean,
}

const Select: React.FC<Props> = ({ children, active }) => {
  return (
    <Container style={active ? {opacity: 1, visibility: 'visible'} : {opacity: 0, visibility: 'hidden'}}>
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default Select