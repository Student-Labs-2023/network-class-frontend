import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 8px;
  background: var(--white, #fff);
  box-shadow: 0px 0px 2px 0px #c5ccd5;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 34px;
  height: 34px;
`;

interface Props {
  iconOn: string;
  iconOff: string;
  isActive: boolean;
  onClick: () => void;
}

export const SwitchDevice: React.FC<Props> = ({
  iconOn,
  iconOff,
  isActive,
  onClick,
}) => {
  const [active, setActive] = useState(isActive);

  return (
    <Container
      onClick={() => {
        setActive(!active);
        onClick();
      }}
    >
      {active ? <Icon src={iconOn} /> : <Icon src={iconOff} />}
    </Container>
  );
};
