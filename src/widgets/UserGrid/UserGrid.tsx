import React, { CSSProperties, useRef, useState } from "react";
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
  min-width: 100%;
  height: 100%;
  left: 0;
  display: flex;
  flex-wrap: nowrap;
  transition: left 0.4s ease-out;
`;

const ListPage = styled.div`
  flex: 1 0 1440px;
  display: grid;
  height: 100%;
  gap: 12px;
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
  const refPage = useRef<HTMLDivElement>(null);
  const [numberPage, setNumberPage] = useState(1);
  const lengthPage = 15;
  const maxPage: number = Math.ceil(peopleList.length / lengthPage);
  const listPages = [];

  const getCSSGridStyles = (numberOfItems: number): CSSProperties => {
    if (numberOfItems <= 1) {
      return { gridTemplate: "1fr / 1fr" };
    } else if (numberOfItems <= 2) {
      return { gridTemplate: "1fr / repeat(2, 1fr)" };
    } else if (numberOfItems <= 6) {
      return { gridTemplate: "repeat(2, 1fr) / repeat(3, 1fr)" };
    } else if (numberOfItems <= 8) {
      return { gridTemplate: "repeat(2, 1fr) / repeat(4, 1fr)" };
    } else if (numberOfItems <= 12) {
      return { gridTemplate: "repeat(3, 1fr) / repeat(4, 1fr)" };
    } else {
      return { gridTemplate: "repeat(3, 1fr) / repeat(5, 1fr)" };
    }
  };

  for (let i = 0; i < maxPage; i++) {
    const listPage = peopleList
      .slice(i * lengthPage, (i + 1) * lengthPage)
      .map((people, index) => (
        <UserBlock avatar={people.picture} name={people.name} key={index} />
      ));
    listPages.push(
      <ListPage ref={refPage} key={i} style={getCSSGridStyles(listPage.length)}>
        {listPage}
      </ListPage>
    );
  }

  function moveRight() {
    if (!checkDisabled("right")) {
      list.current && refPage.current
        ? (list.current.style.left = `-${
            numberPage * refPage.current?.offsetWidth
          }px`)
        : "";
      setNumberPage(numberPage + 1);
    }
  }

  function moveLeft() {
    if (!checkDisabled("left")) {
      list.current && refPage.current
        ? (list.current.style.left = `-${
            (numberPage - 2) * refPage.current?.offsetWidth
          }px`)
        : "";
      setNumberPage(numberPage - 1);
    }
  }

  function checkDisabled(button: string): boolean {
    switch (button) {
      case "left":
        return numberPage > 1 ? false : true;
      case "right":
        return numberPage < maxPage ? false : true;
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
      <List ref={list}>{listPages}</List>
      <ShowMoreButton
        style={{ right: "10px" }}
        onClick={moveRight}
        disabled={checkDisabled("right")}
      >
        <img src={right} alt="" />
      </ShowMoreButton>
    </Container>
  );
};

export default UserGrid;
