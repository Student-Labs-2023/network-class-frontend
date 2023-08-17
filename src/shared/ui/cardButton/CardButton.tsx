import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--blue, #175ef1);
  background: var(--white, #fff);
  color: var(--blue, #175ef1);
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  transition: all 0.3s ease;

  &:hover {
    color: var(--white);
    background: var(--blue, #175ef1);
  }
`;

interface Props {
  children?: string;
  onClick?: () => void;
}

const CardButton: React.FC<Props> = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default CardButton;
