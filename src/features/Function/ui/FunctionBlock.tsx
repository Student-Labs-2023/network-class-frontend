import React, { useState } from "react";
import styled from "styled-components";
import { IFunction } from "../../../shared/api/models";

const Link = styled.a`
  flex: 1 1;
  padding: 20px 5px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  flex-wrap: nowrap;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #c5ccd5;

  &:hover,
  &:active {
    border: 2px solid #175ef1;
    background: #f9fafe;
    cursor: pointer;
  }
`;

const Icon = styled.img`
  width: 34px;
  height: 34px;
`;

const Title = styled.div`
  color: #000;
  text-align: center;
  font-family: Noto Sans;
  font-size: 22px;
  font-weight: 500;
`;

const Description = styled.div`
  color: #a0afc1;
  text-align: center;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
`;

interface Props {
  func: IFunction;
}

export const FunctionBlock: React.FC<Props> = ({ func }) => {
  const [currentIcon, setCurrentIcon] = useState(func.icon);

  function onHover() {
    currentIcon === func.icon
      ? setCurrentIcon(func.iconActive)
      : setCurrentIcon(func.icon);
  }

  return (
    <Link href={func.link} onMouseEnter={onHover} onMouseLeave={onHover}>
      <Icon src={currentIcon} />
      <Title>{func.title}</Title>
      <Description>{func.description}</Description>
    </Link>
  );
};
