import React, { useState } from "react";
import styled from "styled-components";
import Select from "../../shared/ui/Select";
import { LogoutButton } from "../../features/logout/index.ts";
import avatarIcon from "../../../public/icons/avatar.svg";
import logo from "../../../public/icons/logo.svg";
import selectIcon from "../../../public/icons/select.svg";
import settingsIcon from "../../../public/icons/setting-mini.svg";
import logoutIcon from "../../../public/icons/logout.svg";
import { useAuth0 } from "@auth0/auth0-react";

const Container = styled.div`
  display: flex;
  min-width: 100%;
  height: 92px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 92px 0 80px;
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

const Right = styled.div`
  position: relative;
  display: flex;
  width: 279px;
  align-items: center;
  gap: 15px;
`;

const Text = styled.div`
  font-family: var(--font);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  color: var(--black);
`;

const SelectLink = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  color: inherit;
`;

const Divider = styled.div`
  margin: 10px 0;
  width: 192px;
  height: 0.5px;
  background: var(--grey_5);
`;

const Header: React.FC = () => {
  const [selectActive, setSelectActive] = useState(false);
  const { user, isAuthenticated } = useAuth0();

  function changeSelectVisibility() {
    setSelectActive(!selectActive);
  }

  return (
    <Container>
      <Left>
        <a href="/" style={{ marginRight: "24px" }}>
          <img src={logo} alt="Логотип" />
        </a>
        <Logo href="/">Сетевой учебный класс</Logo>
      </Left>
      <Right>
        <img src={avatarIcon} alt="avatar" />
        {isAuthenticated ? <Text>{user?.name}</Text> : <Text>Loading...</Text>}
        <button onClick={changeSelectVisibility}>
          <img src={selectIcon} alt="меню" />
        </button>

        <Select active={selectActive}>
          <SelectLink href="">
            <img src={settingsIcon} alt="Настройки" />
            <Text>Настройки</Text>
          </SelectLink>
          <Divider></Divider>
          <SelectLink href="">
            <img src={logoutIcon} alt="Выйти" />
            <LogoutButton />
          </SelectLink>
        </Select>
      </Right>
    </Container>
  );
};

export default Header;
