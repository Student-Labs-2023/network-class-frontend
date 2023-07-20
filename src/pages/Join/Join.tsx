import React, { useState } from "react";
import styles from "./styles.module.css";
import logo from "../../../public/icons/logo.svg";
import topPattern from "../../../public/icons/top-pattern.svg";
import bottomPattern from "../../../public/icons/bottom-pattern.svg";
import monitor from "../../../public/icons/monitor.svg";
import people from "../../../public/icons/people.svg";
import { LogoutButton } from "../../features/logout/index.ts";
import avatarIcon from "../../../public/icons/avatar.svg";
import selectIcon from "../../../public/icons/select.svg";
import settingsIcon from "../../../public/icons/setting-mini.svg";
import logoutIcon from "../../../public/icons/logout.svg";
import { EnterClassForm } from "../../features/EnterClass/index.ts";
import FunctionsList from "../../widgets/FunctionsList/FunctionsList.tsx";
import functions from "../../widgets/FunctionsList/functionsObject.tsx";
import { useAuth0 } from "@auth0/auth0-react";
import Select from "../../shared/ui/Select.tsx";

const Join: React.FC = () => {
  const [selectActive, setSelectActive] = useState(false);
  const { user, isAuthenticated } = useAuth0();

  function changeSelectVisibility() {
    setSelectActive(!selectActive);
  }

  return (
    <div className={styles.Join}>
      <div className={styles.leftSide}>
        <header className={styles.header}>
          <img src={logo} alt="Логотип" />
          <div className={styles.titleApp}>Сетевой учебный класс</div>
          <div className={styles.account}>
            <img src={avatarIcon} alt="avatar" />
            {isAuthenticated ? (
              <div className={styles.textAccount}>{user?.name}</div>
            ) : (
              <div className={styles.textAccount}>Loading...</div>
            )}
            <button onClick={changeSelectVisibility}>
              <img src={selectIcon} alt="меню" />
            </button>

            <Select active={selectActive}>
              <a href="" className={styles.selectLink}>
                <img src={settingsIcon} alt="Настройки" />
                <div className={styles.textAccount}>Настройки</div>
              </a>
              <div className={styles.divider}></div>
              <a href="" className={styles.selectLink}>
                <img src={logoutIcon} alt="Выйти" />
                <LogoutButton />
              </a>
            </Select>
          </div>
        </header>
        <main className={styles.main}>
          <div className={styles.titleMotivation}>Учиться стало еще проще!</div>
          <div className={styles.textMotivation}>
            Комфортная видеосвязь, качественное проведение уроков, контроль
            выполнения заданий – всё это и не только в одном приложении!
          </div>
          <EnterClassForm />
          <FunctionsList functions={functions} />
        </main>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.topPattern}>
          <img src={topPattern} alt="top-pattern" />
        </div>
        <div className={styles.appearanceApp}>
          <div>
            <div className={styles.monitorIcon1}>
              <img src={monitor} alt="monitor-icon" />
            </div>
            <div className={styles.monitorIcon2}>
              <img src={monitor} alt="monitor-icon" />
            </div>
            <div className={styles.monitorIcon3}>
              <img src={monitor} alt="monitor-icon" />
            </div>
            <div className={styles.peopleIcon}>
              <img src={people} alt="people" />
            </div>
          </div>
        </div>
        <div className={styles.bottomPattern}>
          <img src={bottomPattern} alt="bottom-pattern" />
        </div>
      </div>
    </div>
  );
};

export default Join;
