import React from "react";
import styled from "styled-components";

const Path = styled.path``;

const Button = styled.a`
  font-family: var(--font);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  color: var(--blue);

  display: flex;
  height: 44px;
  padding: 10px;
  align-items: center;
  gap: 15px;
  border-radius: 10px;
  border: 1px solid var(--blue);
  transition: all 0.3s;
  &:hover {
    background: var(--blue);
    color: #fff;
  }
  &:hover ${Path} {
    stroke: var(--white);
  }
`;

interface Props {
  href: string,
}

const JoinButton: React.FC<Props> = ({ href }) => {
  return (
    <Button
      href={`${href}`}
    >
      <p>Подключиться</p>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="bracket--code-angle-programming-file-bracket">
          <Path
            id="Vector"
            d="M7.66666 21.0001L13.807 11.1204L7.66666 1.24072"
            stroke="#175EF1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            id="Vector_2"
            d="M1 20.963L7.14035 11.0833L1 1.20361"
            stroke="#175EF1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            id="Vector_2_2"
            d="M14.8596 20.7594L21 10.8797L14.8596 1"
            stroke="#175EF1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </Button>
  );
};

export default JoinButton;
