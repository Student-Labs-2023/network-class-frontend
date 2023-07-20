import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  border-radius: 10px 8px 8px 10px;
  padding: 24px 20px;
  background: var(--blue);
  text-align: center;
  font-family: var(--font);
  font-size: 22px;
  font-weight: 400;

  &:active,
  &:hover {
    background: #07379d;
  }
`;

interface Props {
  children?: string;
  type?: "button" | "submit" | "reset";
}

const EnterButton: React.FC<Props> = ({ type, children }) => {
  return <Button type={type ? type : "submit"}>{children}</Button>;
};

export default EnterButton;
