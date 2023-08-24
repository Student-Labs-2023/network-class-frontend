import React from 'react';
import styles from './styles.module.css';
import openIcon from '../../../../public/icons/open.svg';
import closeIcon from '../../../../public/icons/close.svg';

interface Props {
  value?: boolean,
  onClick?: () => void,  
}

const SwitchToggle: React.FC<Props> = ({ value, onClick }) => {

  return (
    <button type='button' onClick={onClick} className={value ? styles.switch__open : styles.switch__close}>
        {value ? <p className={styles.text__open}>Открытый</p> : <></>}
        <span className={value ? styles.slider__open : styles.slider__close}>
            {value ? 
                <img src={openIcon} alt="открытый" /> :
                <img src={closeIcon} alt='закрытый'/>
            }
        </span>
        {value ? <></> : <p className={styles.text__close}>Закрытый</p>}
    </button>
  )
}

export default SwitchToggle;
