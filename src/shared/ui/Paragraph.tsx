import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode
}

const Text = styled.div`
  font-family: var(--font);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  color: var(--black);
`;

const Paragraph: React.FC<Props> = ({ children }) => {
  return (
    <Text>{children}</Text>
  )
};

export default Paragraph;