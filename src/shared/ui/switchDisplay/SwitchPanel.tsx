import React, { useState } from "react";
import styles from "./styles.module.css";

interface Props {
  oneSwitch: string;
  twoSwitch: string;
  style: Object;
  state: boolean;
  onClick: (stateSwitch: boolean) => void;
}

const SwitchPanel: React.FC<Props> = (props) => {
  const [displaySwitch, setDisplaySwitch] = useState(props.state);

  function clickRight() {
    props.onClick(true);
    setDisplaySwitch(true);
  }

  function clickLeft() {
    props.onClick(false);
    setDisplaySwitch(false);
  }

  return (
    <div className={styles.switchPanel} style={props.style}>
      <div
        className={
          displaySwitch ? styles.switch : styles.switch + " " + styles.active
        }
        onClick={clickLeft}
      >
        <img src={props.oneSwitch} alt="" />
      </div>
      <div
        className={
          displaySwitch ? styles.switch + " " + styles.active : styles.switch
        }
        onClick={clickRight}
      >
        <img src={props.twoSwitch} alt="" />
      </div>
    </div>
  );
};

export default SwitchPanel;
