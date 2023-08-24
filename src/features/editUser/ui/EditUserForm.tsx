import React, { useState } from "react";
import styled from "styled-components";
import styles from "./styles.module.css";
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
        <div className={styles.user}>
          <div className={styles.avatar}>
            <img
              src={avatar}
              alt=""
              style={{ width: "100%", height: "100%", borderRadius: "7px" }}
            />
            <input
              className={styles.inputAvatar}
              type="file"
              title=" "
              onChange={onImageChange}
            />
          </div>
          <div className={styles.info}>
            <input
              className={styles.name}
              type="text"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              autoFocus
            />
            <div className={styles.email}>
              <div className={styles.emailText}>{user?.email}</div>
              {!user?.email_verified ? (
                <a className={styles.accessEmail}>
                  {profileFormState.isEmailConfirmed ? (
                    <div style={{ color: "var(--green, #5bc259)" }}>
                      На вашу почту выслано письмо с подтверждением
                    </div>
                  ) : (
                    <a className={styles.accessText} onClick={sendAccess}>
                      Подтвердите почту
                    </a>
                  )}
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <FormButton>Сохранить</FormButton>
      </Form>
    </ProfileFormLayout>
  );
});
