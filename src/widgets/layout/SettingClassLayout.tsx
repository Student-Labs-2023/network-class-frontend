import React from "react";
import { styled } from "styled-components";
import CheckBox from "../../shared/ui/checkBox/CheckBox";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const Head = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
`;

const Title = styled.div`
  color: var(--black, #000);
  font-family: var(--font);
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
`;

interface Props {
  title: string;
  children?: React.ReactNode;
}

export const SettingClassLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <Head>
        <Title>{title}</Title>
        <CheckBox text="Доступно модератору" />
      </Head>
      <Main>{children}</Main>
    </Container>
  );
};
