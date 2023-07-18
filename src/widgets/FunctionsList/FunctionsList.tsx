import React from "react";
import type { IFunction } from "../../shared/api/models";
import styled from "styled-components";
import { FunctionBlock } from "../../features/Function";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 27px;
  height: 180px;
`;

interface Props {
  functions: IFunction[];
}

const FunctionsList: React.FC<Props> = ({ functions }) => {
  return (
    <Container>
      {functions.map((func) => (
        <FunctionBlock func={func} key={func.title} />
      ))}
    </Container>
  );
};

export default FunctionsList;
