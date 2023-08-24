import React, { useState } from "react";
import styled from "styled-components";
import back from "../../../../public/icons/arrow-left.svg";
import backActive from "../../../../public/icons/arrow-left-active.svg";
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
  width: 26px;
  height: 26px;
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
