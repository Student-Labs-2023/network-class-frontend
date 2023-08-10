import React, { useState } from 'react';
import ControllerLayout from '../../../widgets/layout/ControllerLayout';

export const ScreenController: React.FC = () => {
    const [active, setActive] = useState(false);

    function changeActive() {
        setActive(!active);
    }

  return (
    <ControllerLayout onClick={changeActive} bg='#5BC259'>
        {active ?
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                <path d="M5.97997 2H16.2964C19.6021 2 20.4285 2.89 20.4285 6.44V12.77C20.4285 16.33 19.6021 17.21 16.3057 17.21H5.97997C2.68355 17.22 1.85712 16.33 1.85712 12.78V6.44C1.85712 2.89 2.68355 2 5.97997 2Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.1429 17.2197V21.9997" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.85712 13H20.4285" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.96429 22H15.3214" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                <path d="M5.97997 2H16.2964C19.6021 2 20.4285 2.89 20.4285 6.44V12.77C20.4285 16.33 19.6021 17.21 16.3057 17.21H5.97997C2.68355 17.22 1.85712 16.33 1.85712 12.78V6.44C1.85712 2.89 2.68355 2 5.97997 2Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.1429 17.2197V21.9997" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.85712 13H20.4285" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.96429 22H15.3214" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        }
    </ControllerLayout>
  )
}
