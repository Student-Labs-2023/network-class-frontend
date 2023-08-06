import React from "react";
import styled from "styled-components";
import EnterButton from "../../../shared/ui/EnterButton";

const Form = styled.form`
  width: 100%;
  height: 82px;
  display: flex;
  flex-wrap: nowrap;
  border-radius: 10px;
  border: 2px solid var(--blue);
`;

const Input = styled.input`
  flex: 1 1;
  padding: 24px 0 24px 20px;
  border-radius: 10px;
  font-family: var(--font);
  font-size: 22px;
  font-weight: 300;

  &::placeholder {
    color: var(--grey_3);
    font-family: var(--font);
    font-size: 22px;
    font-weight: 400;
  }
  &:focus::placeholder {
    opacity: 0;
  }
`;

export const EnterClassForm: React.FC = () => {
  return (
    <Form action="#" method="get" autoComplete="on">
      <Input type="text" name="link" placeholder="Ссылка на класс" />
      <EnterButton type="submit">Присоединиться</EnterButton>
    </Form>
  );
};
