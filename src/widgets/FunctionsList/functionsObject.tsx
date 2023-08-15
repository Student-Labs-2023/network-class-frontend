import { IFunction } from "../../shared/api/models";
import createClass from "../../../public/icons/create-class2.svg";
import createClassActive from "../../../public/icons/create-class2-active.svg";
import search from "../../../public/icons/search2.svg";
import searchActive from "../../../public/icons/search2-active.svg";
import settings from "../../../public/icons/settings.svg";
import settingsActive from "../../../public/icons/settings-active.svg";

const functions: IFunction[] = [
  {
    icon: createClass,
    iconActive: createClassActive,
    title: "Новый класс",
    description: "Создать свой класс и провести занятие онлайн",
    link: "/lobby",
    onClick: () => {
      localStorage.setItem("trigger", "create");
    },
  },
  {
    icon: search,
    iconActive: searchActive,
    title: "Поиск",
    description: "Найти класс и получить новые знания",
    link: "/lobby",
    onClick: () => {
      localStorage.setItem("trigger", "all");
    },
  },
  {
    icon: settings,
    iconActive: settingsActive,
    title: "Настройки",
    description: "Редактировать свой профиль и классы",
    link: "/",
  },
];

export default functions;
