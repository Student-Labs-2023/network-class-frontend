import React, { useState } from "react";
import styled from "styled-components";
import Select from "../../shared/ui/Select";
import { LogoutButton } from "../../features/logout";
import avatarIcon from "../../../public/icons/avatar.svg";
import selectIcon from "../../../public/icons/select.svg";
import { useAuth0 } from "@auth0/auth0-react";
import Paragraph from "../../shared/ui/Paragraph";
import { EnterProfileButton } from "../../features/EnterProfile";

const Container = styled.div`
  position: relative;
  display: flex;
  width: 279px;
  height: 44px;
  align-items: center;
  gap: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 10px;
`;

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
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
`;

const SelectLink = styled.div`
  color: inherit;

  &:hover {
    cursor: pointer;
  }
`;

const Divider = styled.div`
  margin: 10px 0;
  width: 100%;
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
    <Container onClick={changeSelectVisibility}>
      <Avatar src={user?.picture ? user?.picture : avatarIcon} alt="avatar" />
      <Text>
        {isAuthenticated ? (
          <Paragraph>{user?.name}</Paragraph>
        ) : (
          <Paragraph>Loading...</Paragraph>
        )}
      </Text>
      <Button>
        <img src={selectIcon} alt="меню" />
      </Button>

      <Select active={selectActive}>
        <SelectLink>
          <EnterProfileButton />
        </SelectLink>
        <Divider></Divider>
        <SelectLink>
          <LogoutButton />
        </SelectLink>
      </Select>
    </Container>
  );
};

export default ProfilePanel;
