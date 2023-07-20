import React, { useState } from 'react';
import styled from 'styled-components';
import Select from '../../shared/ui/Select';
import { LogoutButton } from '../../features/logout';
import avatarIcon from "../../../public/icons/avatar.svg";
import selectIcon from "../../../public/icons/select.svg";
import settingsIcon from "../../../public/icons/setting-mini.svg";
import logoutIcon from "../../../public/icons/logout.svg";
import { useAuth0 } from "@auth0/auth0-react";
import Paragraph from '../../shared/ui/Paragraph';

const Container = styled.div`
  position: relative;
  display: flex;
  width: 279px;
  height: 44px;
  align-items: center;
  gap: 15px;
`;

const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 10px;
`

const Text = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  height: 44px;
  overflow: hidden;
  &:after {
    position: absolute;
    top: 0;
    right: 44px;
    height: 100%;
    width: 50px;
    background: linear-gradient(90deg, transparent 0, #fff 100%);
    content: "";
  }
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
`

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

const ProfilePanel: React.FC = () => {
   const [selectActive, setSelectActive] = useState(false);
   const { user, isAuthenticated } = useAuth0();
 
   function changeSelectVisibility() {
     setSelectActive(!selectActive);
   }

  return (
   <Container>
     <Avatar src={user?.picture ? user?.picture : avatarIcon} alt="avatar" />
     <Text>
      {isAuthenticated ? <Paragraph>{user?.name}</Paragraph> : <Paragraph>Loading...</Paragraph>}
     </Text>
     <Button onClick={changeSelectVisibility}>
       <img src={selectIcon} alt="меню" />
     </Button>

     <Select active={selectActive}>
       <SelectLink href="">
         <img src={settingsIcon} alt="Настройки" />
         <Paragraph>Настройки</Paragraph>
       </SelectLink>
       <Divider></Divider>
       <SelectLink href="">
         <img src={logoutIcon} alt="Выйти" />
         <LogoutButton />
       </SelectLink>
     </Select>
   </Container>
  )
};

export default ProfilePanel;
