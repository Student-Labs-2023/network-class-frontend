import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  width: 46px;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: var(--white);
  box-shadow: 0px 0px 2px 0px #C5CCD5;
`

interface Props {
  children?: React.ReactNode,
  onClick?: () => void,
  bg?: string,
}


const ControllerLayout: React.FC<Props> = ({ children, onClick, bg }) => {
  return (
    <Button onClick={onClick} style={{background: bg}}>{children}</Button>
  )
}

export default ControllerLayout;
