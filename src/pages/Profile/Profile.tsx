import React from "react";
import { styled } from "styled-components";
import Header from "../../widgets/layout/Header";
import UserCard from "../../entities/user/ui/UserCard";
import Statistics from "../../widgets/Statistics/Statistics";

const Container = styled.div``;

const Title = styled.div`
  color: #000;
  font-family: var(--font);
  font-size: 28px;
  font-weight: 500;
  margin: 84px 0 34px 123px;
`;

const ProfileCard = styled.div`
  margin: 0 121px 73px 123px;
`;

const Profile: React.FC = () => {
  return (
    <Container>
      <Header />
      <Title>Мой профиль</Title>
      <ProfileCard>
        <UserCard />
      </ProfileCard>
      <Statistics />
    </Container>
  );
};

export default Profile;
