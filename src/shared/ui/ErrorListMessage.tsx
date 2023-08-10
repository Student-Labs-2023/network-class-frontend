import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
    text-align: center;
    font-family: var(--font);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--red);
    margin-top: 94px;
`

interface Props {
    children?: React.ReactNode,
}
const ErrorListMessage: React.FC<Props> = ({ children }) => {
  return (
    <Paragraph>{children}</Paragraph>
  )
}

export default ErrorListMessage