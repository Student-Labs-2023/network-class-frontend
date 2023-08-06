import React, { useRef, useState } from "react";
import styled from "styled-components";
import right from "../../../public/icons/arrow-right.svg";
import { IUser } from "../../shared/api/models";
import avatar from "../../../public/icons/avatar.svg";
import { UserBlock } from "../../features/UserBlock";

const Container = styled.div`
  flex: 1 1;
  width: 100%;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0;
  }
  margin-bottom: 13px;
`;

const List = styled.div`
  position: relative;
  display: grid;
  min-width: 100%;
  height: 100%;
  left: 0;
  grid-template-rows: repeat(3, minmax(170px, 1fr));
  grid-template-columns: minmax(276px, 0.2fr);
  grid-auto-columns: minmax(276px, 0.2fr);
  grid-auto-flow: column;
  gap: 12px;
  transition: all 0.4s ease-out;
`;

const ShowMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  background: var(--white, #fff);
  box-shadow: 0px 0px 2px 0px #c5ccd5;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 1000;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 2px 0px #c5ccd5,
      -2px -2px 4px 0px rgba(0, 0, 0, 0.1) inset;
  }

  &:disabled {
    cursor: default;
    box-shadow: 0px 0px 2px 0px #989da3;
    opacity: 0.5;
  }
`;

const peopleList: IUser[] = [
  {
    email: "jjj",
    email_verified: true,
    name: "Пышненко Дмитрий Алексеевич",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
  {
    email: "jjj",
    email_verified: true,
    name: "Иванов Иван Иванович",
    nickname: "jjj",
    picture: `${avatar}`,
    sub: "",
    updated_at: "11.11.1999",
  },
];

const UserGrid: React.FC = () => {
  const list = useRef<HTMLDivElement>(null);
  const [listPage, setListPage] = useState(1);
  const lengthPage = 15;
  const maxPage: number = Math.ceil(peopleList.length / lengthPage);

  function moveRight() {
    if (!checkDisabled("right")) {
      list.current ? (list.current.style.left = `-${listPage * 100}%`) : "";
      setListPage(listPage + 1);
    }
  }

  function moveLeft() {
    if (!checkDisabled("left")) {
      list.current
        ? (list.current.style.left = `-${(listPage - 2) * 100}%`)
        : "";
      setListPage(listPage - 1);
    }
  }

  function checkDisabled(button: string): boolean {
    switch (button) {
      case "left":
        return listPage > 1 ? false : true;
      case "right":
        return listPage < maxPage ? false : true;
      default:
        return false;
    }
  }

  return (
    <Container>
      <ShowMoreButton
        style={{ left: "10px" }}
        onClick={moveLeft}
        disabled={checkDisabled("left")}
      >
        <img src={right} alt="" style={{ transform: "rotate(180deg)" }} />
      </ShowMoreButton>
      <List ref={list}>
        {peopleList.map((people) => (
          <UserBlock avatar={people.picture} name={people.name} />
        ))}
      </List>
      <ShowMoreButton
        style={{ right: "20px" }}
        onClick={moveRight}
        disabled={checkDisabled("right")}
      >
        <img src={right} alt="" />
      </ShowMoreButton>
    </Container>
  );
};

export default UserGrid;
