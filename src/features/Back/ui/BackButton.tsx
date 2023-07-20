import React, { useState } from "react";
import styled from "styled-components";
import back from "../../../../public/icons/bracket--code-angle-programming-file-bracket.svg";
import backActive from "../../../../public/icons/bracket--code-angle-programming-file-bracket-active.svg";
import { useNavigate } from "react-router-dom";

const Container = styled.a`
  display: inline-flex;
  height: 44px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:hover,
  &:active {
    cursor: pointer;
    div {
      color: var(--blue, #175ef1);
    }
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const Text = styled.div`
  color: var(--grey-2, #7e8a98);
  font-family: var(--font);
  font-size: 18px;
  font-weight: 400;
  padding-bottom: 2px;
`;

export const BackButton: React.FC = () => {
  const nav = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <Container
      onClick={() => nav(-1)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Icon src={hover ? backActive : back} />
      <Text>назад</Text>
    </Container>
  );
};
