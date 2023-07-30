import React from 'react';
import styled from 'styled-components';

const Container = styled.form`
    position: relative;
    width: calc(100% - 20px);
    max-width: 1196px;
    padding: 24px;
    border-radius: 10px;
    background: var(--white);
    margin: 2px auto 25px;
    &::before {
        content: "";
        position: absolute;
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
        border-radius: 12px;
        background: linear-gradient(223deg, rgba(255, 178, 64, 0.90) 0%, rgba(216, 97, 196, 0.90) 50.52%, rgba(23, 94, 241, 0.90) 100%);
        z-index: -1;
    }
`

interface Props {
  children?: React.ReactNode,
}

const LobbyFormLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container>{children}</Container>
  )
}

export default LobbyFormLayout;
