import React, { useState } from "react";
import styled from "styled-components";
import ProfileFormLayout from "../../../widgets/layout/ProfileFormLayout";
import { useAuth0 } from "@auth0/auth0-react";
import avatarDefault from "../../../../public/icons/avatar.svg";
import FormButton from "../../../shared/ui/formButton/FormButton";
import profileFormState from "../../../pages/Profile/store/profileFormState";
import { observer } from "mobx-react-lite";

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    border-radius: 12px;
    background: linear-gradient(
      223deg,
      rgba(255, 178, 64, 0.9) 0%,
      rgba(216, 97, 196, 0.9) 50.52%,
      rgba(23, 94, 241, 0.9) 100%
    );
    z-index: -1;
  }
`;

const User = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Avatar = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 10px;
  border: 2px dashed #175ef1;
  position: relative;
`;

const InputAvatar = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: transparent;

  &:hover {
    cursor: pointer;
  }

  &::file-selector-button {
    display: none;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Name = styled.input`
  width: 100%;
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

export const EditUserForm: React.FC = observer(() => {
  const { user } = useAuth0();
  const [avatar, setAvatar] = useState(user?.picture || avatarDefault);
  const [name, setName] = useState(user?.name);

  const sendAccess = () => {
    profileFormState.confirmEmail();
  };

  const saveChanges = () => {
    profileFormState.closeEditForm();
  };

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setAvatar(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <ProfileFormLayout>
      <Form
        action=""
        autoComplete="off"
        method="post"
        encType="multipart/form-data"
        onSubmit={saveChanges}
      >
        <User>
          <Avatar>
            <img
              src={avatar}
              alt=""
              style={{ width: "100%", height: "100%", borderRadius: "7px" }}
            />
            <InputAvatar type="file" title=" " onChange={onImageChange} />
          </Avatar>
          <Info>
            <Name
              type="text"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              autoFocus
            />
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
        <FormButton>Сохранить</FormButton>
      </Form>
    </ProfileFormLayout>
  );
});
