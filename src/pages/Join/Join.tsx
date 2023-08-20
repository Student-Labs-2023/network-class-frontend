import React from "react";
import styles from "./styles.module.css";
import logo from "../../../public/icons/logo.svg";
import topPattern from "../../../public/icons/top-pattern.svg";
import bottomPattern from "../../../public/icons/bottom-pattern.svg";
import monitor from "../../../public/icons/monitor.svg";
import people from "../../../public/icons/people.svg";
import { EnterClassForm } from "../../features/EnterClass/index.ts";
import FunctionsList from "../../widgets/FunctionsList/FunctionsList.tsx";
import functions from "../../widgets/FunctionsList/functionsObject.tsx";
import ProfilePanel from "../../widgets/ProfilePanel/ProfilePanel.tsx"
import { useAuth0 } from "@auth0/auth0-react";
import { useAddUser } from "../../entities/user/api/useAddUser.ts";

const Join: React.FC = () => {
  const { isAuthenticated, user } = useAuth0();

  if (isAuthenticated) {
    useAddUser(user?.name, 'test', user?.email);
  }

  return (
    <div className={styles.Join}>
      <div className={styles.leftSide}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <img src={logo} alt="Логотип" />
            <div className={styles.titleApp}>Сетевой учебный класс</div>
          </div>
          <ProfilePanel />
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
