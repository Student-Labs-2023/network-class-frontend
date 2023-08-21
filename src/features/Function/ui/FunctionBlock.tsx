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
  border: 2px solid var(--grey_4);

  &:hover,
  &:active {
    border: 2px solid var(--blue);
    background: var(--grey_6);
    cursor: pointer;
  }
`;

const Icon = styled.img`
  width: 34px;
  height: 34px;
`;

const Title = styled.div`
  color: var(--black);
  text-align: center;
  font-family: var(--font);
  font-size: 22px;
  font-weight: 500;
`;

const Description = styled.div`
  color: var(--grey_3);
  text-align: center;
  font-family: var(--font);
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

  console.log(func.link);

  return (
    <Link
      href={func.link}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
      onClick={func.onClick}
    >
      <Icon src={currentIcon} />
      <Title>{func.title}</Title>
      <Description>{func.description}</Description>
    </Link>
  );
};
