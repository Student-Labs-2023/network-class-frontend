import React from "react";
import styled from "styled-components";
import logo from "../../../public/icons/logo.svg";
import ProfilePanel from "../ProfilePanel/ProfilePanel.tsx";

const Container = styled.div`
  display: flex;
  min-width: 100%;
  height: 92px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 92px 0 80px;
  background-color: var(--white);
`;

const Left = styled.div``;

const Logo = styled.a`
  text-align: center;
  font-family: Kino;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8;

  color: var(--blue);
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Left>
        <a href="/" style={{ marginRight: "24px" }}>
          <img src={logo} alt="Логотип" />
        </a>
        <Logo href="/">Сетевой учебный класс</Logo>
      </Left>
      <ProfilePanel />
    </Container>
  );
};

export default Header;
