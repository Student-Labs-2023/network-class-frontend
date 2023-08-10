import React from "react";
import styled from "styled-components";
import { IUser } from "../../shared/api/models";
import { ParticipantCard } from "../../features/Participant";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding-top: 3px;
`;

interface Props {
  isActive: boolean;
  peopleList: IUser[];
}

const ParticipantsList: React.FC<Props> = ({ isActive, peopleList }) => {
  return (
    <Container style={isActive ? { opacity: "1" } : { opacity: "0.5" }}>
      {peopleList.map((people, index) => (
        <ParticipantCard
          avatar={people.picture}
          name={people.name}
          isActive={isActive}
          key={index}
        />
      ))}
    </Container>
  );
};

export default ParticipantsList;
