import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { styled } from "styled-components";
import avatar from "../../../../public/icons/avatar.svg";
import CardButton from "../../../shared/ui/cardButton/CardButton";
import ProfileFormLayout from "../../../widgets/layout/ProfileFormLayout";
import profileFormState from "../../../pages/Profile/store/profileFormState";
import { observer } from "mobx-react-lite";

const User = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Avatar = styled.img`
  width: 86px;
  height: 86px;
  border-radius: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Name = styled.div`
  font-size: 22px;
  font-weight: 500;
`;

const Email = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const EmailText = styled.div`
  font-size: 20px;
  font-weight: 300;
  line-height: normal;
`;

const AccessEmail = styled.a`
  font-size: 20px;
  font-weight: 300;
  line-height: normal;
`;

const AccessText = styled.a`
  color: var(--red, #f95a39);

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const UserCard: React.FC = observer(() => {
  const { user } = useAuth0();

  const sendAccess = () => {
    profileFormState.confirmEmail();
  };

  const openForm = () => {
    profileFormState.openEditForm();
  };

  return (
    <ProfileFormLayout>
      <User>
        <Avatar src={avatar && user?.picture} />
        <Info>
          <Name>{user?.name}</Name>
          <Email>
            <EmailText>{user?.email}</EmailText>
            {!user?.email_verified ? (
              <AccessEmail>
                {profileFormState.isEmailConfirmed ? (
                  <div style={{ color: "var(--green, #5bc259)" }}>
                    На вашу почту выслано письмо с подтверждением
                  </div>
                ) : (
                  <AccessText onClick={sendAccess}>
                    Подтвердите почту
                  </AccessText>
                )}
              </AccessEmail>
            ) : (
              ""
            )}
          </Email>
        </Info>
      </User>
      <CardButton onClick={openForm}>Изменить</CardButton>
    </ProfileFormLayout>
  );
});

export default UserCard;
