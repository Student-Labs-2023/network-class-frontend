import React from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  height: 82px;
  display: flex;
  flex-wrap: nowrap;
  border-radius: 10px;
  border: 2px solid #175ef1;
`;

const Input = styled.input`
  flex: 1 1;
  padding: 24px 0 24px 20px;
  border-radius: 10px;
  font-family: Noto Sans;
  font-size: 22px;
  font-weight: 300;

  &::placeholder {
    color: #a0afc1;
    font-family: Noto Sans;
    font-size: 22px;
    font-weight: 400;
  }
  &:focus::placeholder {
    opacity: 0;
  }
`;

const Button = styled.button`
  width: 214px;
  color: white;
  border-radius: 10px 8px 8px 10px;
  padding: 24px 20px;
  background: #175ef1;
  text-align: center;
  font-family: Noto Sans;
  font-size: 22px;
  font-weight: 400;

  &:active,
  &:hover {
    background: #07379d;
  }
`;

export const EnterClassForm: React.FC = () => {
  return (
    <Form action="#" method="get" autoComplete="on">
      <Input type="text" name="link" placeholder="Ссылка на класс" />
      <Button type="submit">Присоединиться</Button>
    </Form>
  );
};
