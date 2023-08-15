import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  justify-content: space-between;
  gap: 30px;
  margin: 0 136px 0 144px;
  color: #000;
  font-family: var(--font);
  line-height: normal;
`;

const StatisticsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

const StatisticsTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
`;

const StatisticsText = styled.div`
  font-size: 20px;
  font-weight: 300;
`;

const Statistics: React.FC = () => {
  return (
    <Container>
      <StatisticsBlock>
        <StatisticsTitle>Дата регистрации</StatisticsTitle>
        <StatisticsText>08.08.2023</StatisticsText>
      </StatisticsBlock>
      <StatisticsBlock>
        <StatisticsTitle>Дата последней онлайн-встречи</StatisticsTitle>
        <StatisticsText>09.08.2023</StatisticsText>
      </StatisticsBlock>
      <StatisticsBlock>
        <StatisticsTitle>Частота проведения встреч</StatisticsTitle>
        <StatisticsText>2.8 встреч в месяц</StatisticsText>
      </StatisticsBlock>
      <StatisticsBlock>
        <StatisticsTitle>Всего участников</StatisticsTitle>
        <StatisticsText>1784</StatisticsText>
      </StatisticsBlock>
      <StatisticsBlock>
        <StatisticsTitle>Всего моих классов</StatisticsTitle>
        <StatisticsText>15</StatisticsText>
      </StatisticsBlock>
      <StatisticsBlock>
        <StatisticsTitle>
          Всего онлайн участников в моих классах
        </StatisticsTitle>
        <StatisticsText>12</StatisticsText>
      </StatisticsBlock>
    </Container>
  );
};

export default Statistics;
