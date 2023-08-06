import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const Content = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: calc(-172px / 2);

  width: 172px;
  padding: 6px 12px;
  background: var(--white);
  box-shadow: 0px 2px 6px 0px #c5ccd5;
  border-radius: 4px;

  font-family: var(--font);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--black);
  text-align: center;
  transition: all 0.3s ease;
  &::before {
    content: "";
    position: absolute;
    left: calc(172px / 2);
    top: -15px;
    border: 8px solid transparent;
    border-bottom: 8px solid var(--white);
  }
`;

interface Props {
  active: boolean;
  children: React.ReactNode;
}

const Tooltip: React.FC<Props> = ({ active, children }) => {
  return (
    <Container>
      <Content
        style={
          active
            ? { opacity: 1, visibility: "visible" }
            : { opacity: 0, visibility: "hidden" }
        }
      >
        Ссылка скопирована!
      </Content>
      {children}
    </Container>
  );
};

export default Tooltip;
