import React, { useState } from "react";
import styled from "styled-components";
import check from "../../../../public/icons/check_small.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Input = styled.input`
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border: 1.5px solid var(--grey-4, #c5ccd5);

  &:checked {
    background: var(--blue, #175ef1) url(${check}) center no-repeat;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.div`
  color: var(--grey-3, #a0afc1);
  font-family: var(--font);
  font-size: 16px;
  font-weight: 400;
`;

interface Props {
  text: string;
}

const CheckBox: React.FC<Props> = ({ text }) => {
  const [selected, setSelected] = useState(true);

  function changeSelected() {
    selected ? setSelected(false) : setSelected(true);
  }

  return (
    <Container>
      <Input
        type="checkbox"
        name="moderator"
        onChange={changeSelected}
        checked={selected}
      />
      <Title style={selected ? { color: "var(--blue, #175EF1)" } : {}}>
        {text}
      </Title>
    </Container>
  );
};

export default CheckBox;
