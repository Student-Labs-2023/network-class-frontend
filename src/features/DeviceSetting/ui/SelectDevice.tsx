import React, { SyntheticEvent, useState } from "react";
import styled from "styled-components";
import close from "../../../../public/icons/select.svg";
import open from "../../../../public/icons/select-active.svg";

const Container = styled.div`
  flex: 1 0 214px;
`;

const Text = styled.div`
  color: var(--grey-1, #5f6a77);
  font-family: var(--font);
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 21px;
`;

const SelectBlock = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  gap: 27px;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 0px var(--grey_4);

  &:hover {
    cursor: pointer;
  }
`;

const Selected = styled.div`
  flex: 1 1;
  display: inline-block;
  color: black;
  font-family: var(--font);
  font-size: 18px;
  font-weight: 400;
  width: 214px;
`;

const Icon = styled.img`
  width: 34px;
  height: 34px;
`;

const SelectList = styled.div`
  padding: 20px 16px 16px;
  border-radius: 10px;
  background: var(--white);
  box-shadow: 5px 5px 10px 0px var(--grey_5);
  transition: all 0.3s ease;
`;

const SelectLink = styled.div`
  color: var(--grey-2, #7e8a98);
  font-family: var(--font);
  font-size: 16px;
  font-weight: 400;

  &:hover {
    color: var(--black, #000);
    cursor: pointer;
  }
`;

const Divider = styled.div`
  margin: 10px 0;
  width: 100%;
  height: 0.5px;
  background: var(--grey_5);
`;

interface Props {
  title: string;
  list: string[];
}

export const SelectDevice: React.FC<Props> = (Props) => {
  const [selectActive, setSelectActive] = useState(false);
  const [selected, setSelected] = useState("По-умолчанию");

  return (
    <Container>
      <Text>{Props.title}</Text>
      <SelectBlock onClick={() => setSelectActive(!selectActive)}>
        <Selected>{selected}</Selected>
        {selectActive ? <Icon src={open} /> : <Icon src={close} />}
      </SelectBlock>
      <div style={{ borderTop: "6px solid transparent" }}>
        <SelectList
          style={
            selectActive
              ? { opacity: 1, visibility: "visible" }
              : { opacity: 0, visibility: "hidden" }
          }
        >
          {Props.list.length ? (
            Props.list.map((device) => (
              <>
                <SelectLink
                  onClick={(e: SyntheticEvent) => {
                    setSelected(e.currentTarget.innerHTML);
                    setSelectActive(!selectActive);
                  }}
                >
                  {device}
                </SelectLink>
                {device !== Props.list[Props.list.length - 1] ? (
                  <Divider />
                ) : (
                  ""
                )}
              </>
            ))
          ) : (
            <SelectLink>Нет устройств</SelectLink>
          )}
        </SelectList>
      </div>
    </Container>
  );
};
