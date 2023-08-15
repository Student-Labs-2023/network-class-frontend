import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { styled } from "styled-components";
import avatar from "../../../../public/icons/avatar.svg";
import CardButton from "../../../shared/ui/cardButton/CardButton";

const Container = styled.div`
  font-family: var(--font);
  color: #000;
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: var(--white, #fff);
  box-shadow: 0px 0px 4px 0px #e5eaf8;
`;

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

const UserCard: React.FC = () => {
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);
  const { user } = useAuth0();

  const sendAccess = () => {
    setIsEmailConfirmed(true);
  };

  return (
    <Container>
      <User>
        <Avatar src={avatar && user?.picture} />
        <Info>
          <Name>{user?.name}</Name>
          <Email>
            <EmailText>{user?.email}</EmailText>
            {!user?.email_verified ? (
              <AccessEmail>
                {isEmailConfirmed ? (
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
      <CardButton>Изменить</CardButton>
    </Container>
  );
};

export default UserCard;
