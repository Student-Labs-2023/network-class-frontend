import React, { useState } from 'react';
import styled from 'styled-components';
import Select from '../../shared/ui/Select';
import avatarIcon from '../../../public/icons/avatar.svg';
import selectIcon from '../../../public/icons/select.svg';
import settingsIcon from '../../../public/icons/setting-mini.svg';
import logoutIcon from '../../../public/icons/logout.svg';

const Container = styled.div`
  display: flex;
  width: 1240px;
  height: 92px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`

const Left = styled.div``

const Logo = styled.a`
  text-align: center;
  font-family: Kino;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  color: var(--blue);
`

const Right = styled.div`
  position: relative;
  display: flex;
  width: 279px;
  align-items: center;
  gap: 15px;
`

const Text = styled.div`
  font-family: var(--font);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  color: var(--black);
`

const SelectLink = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  color: inherit;
`

const Divider = styled.div`
  margin: 10px 0;
  width: 192px;
  height: 0.5px;
  background: var(--grey_5);
`

const Header: React.FC = () => {
  const [selectActive, setSelectActive] = useState(false);

  function changeSelectVisibility() {
    setSelectActive(!selectActive);
  }

  return (
    <Container>
      <Left>
        <Logo href='/'>Сетевой учебный класс</Logo>
      </Left>
      <Right>
        <img src={avatarIcon} alt="avatar" />
        <Text>Морозов Антон Дмитриевич</Text>
        <button onClick={changeSelectVisibility}><img src={selectIcon} alt="меню" /></button>

        <Select active={selectActive}>
          <SelectLink href="">
            <img src={settingsIcon} alt="Настройки" />
            <Text>Настройки</Text>
          </SelectLink>
          <Divider></Divider>
          <SelectLink href="">
            <img src={logoutIcon} alt="Выйти" />
            <Text>Выйти</Text>
          </SelectLink>
        </Select>
      </Right>
    </Container>
  )
}

export default Header;
