import React, { useState } from 'react';
import styles from './styles.module.css';
import openIcon from '../../../../public/icons/open.svg';
import closeIcon from '../../../../public/icons/close.svg';

const SwitchToggle: React.FC = () => {
  const [toggleValue, setToggleValue] = useState(true);

  function changeToggleValue() {
    setToggleValue(!toggleValue);
    console.log(toggleValue);
  }

  return (
    <button type='button' onClick={changeToggleValue} className={toggleValue ? styles.switch__open : styles.switch__close}>
        {toggleValue ? <p className={styles.text__open}>Открытый</p> : <></>}
        <span className={toggleValue ? styles.slider__open : styles.slider__close}>
            {toggleValue ? 
                <img src={openIcon} alt="открытый" /> :
                <img src={closeIcon} alt='закрытый'/>
            }
        </span>
        {toggleValue ? <></> : <p className={styles.text__close}>Закрытый</p>}
    </button>
  )
}

export default SwitchToggle;
