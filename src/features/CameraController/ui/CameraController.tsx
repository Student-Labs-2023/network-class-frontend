import React, { useState } from 'react';
import ControllerLayout from '../../../widgets/layout/ControllerLayout';

export const CameraController: React.FC = () => {
    const [active, setActive] = useState(true);

    function changeActive() {
        setActive(!active);
    }

  return (
    <ControllerLayout onClick={changeActive}>
        {active ?
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="20" viewBox="0 0 29 20" fill="none">
                <path d="M20.6364 6.43268V3.17307C20.6364 1.97788 19.5318 1 18.1818 1H3.45455C2.10455 1 1 1.97788 1 3.17307V16.2115C1 17.4067 2.10455 18.3846 3.45455 18.3846H18.1818C19.5318 18.3846 20.6364 17.4067 20.6364 16.2115V12.9519L26.4046 14.6903C27.1409 14.9076 28 14.3643 28 13.7124V5.88941C28 5.12884 27.1409 4.58554 26.4046 4.91151L20.6364 6.43268Z" stroke="#5F6A77" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.13938 9.14858C9.21474 9.14858 10.0865 8.29728 10.0865 7.24714C10.0865 6.19701 9.21474 5.3457 8.13938 5.3457C7.06401 5.3457 6.19226 6.19701 6.19226 7.24714C6.19226 8.29728 7.06401 9.14858 8.13938 9.14858Z" stroke="#5F6A77" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewBox="0 0 29 25" fill="none">
                <path d="M4.68182 19.8636H3.45455C2.10455 19.8636 1 18.9227 1 17.7727V5.22726C1 4.07726 2.10455 3.13635 3.45455 3.13635H18.1818C19.5318 3.13635 20.6364 4.07726 20.6364 5.22726V6.27272" stroke="#F95A39" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M27.3864 6.79547C27.7546 7.00456 28.0001 7.31822 28.0001 7.73641V15.2636C28.0001 15.9954 27.141 16.5182 26.4046 16.3091L20.6364 14.6364V17.7727C20.6364 18.9227 19.5319 19.8637 18.1819 19.8637H12.0455" stroke="#F95A39" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.74984 10.4545C8.76655 10.4545 9.59075 9.75238 9.59075 8.8863C9.59075 8.02021 8.76655 7.31812 7.74984 7.31812C6.73314 7.31812 5.90894 8.02021 5.90894 8.8863C5.90894 9.75238 6.73314 10.4545 7.74984 10.4545Z" stroke="#F95A39" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M28 1L1 24" stroke="#F95A39" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        }
    </ControllerLayout>
  )
}
