import React, { useState } from 'react';
import styled from 'styled-components';

const Controller = styled.button`
    display: flex;
    width: 46px;
    height: 46px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: var(--white);
    box-shadow: 0px 0px 2px 0px #C5CCD5;
`

export const MicrophoneController: React.FC = () => {
    const [active, setActive] = useState(true);

    function changeActive() {
        setActive(!active);
    }

  return (
    <Controller onClick={changeActive}>
        {active ? 
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26" fill="none">
                <path d="M10.8182 1C7.76365 1 5.36365 3.4 5.36365 6.45455V10.8182C5.36365 13.8727 7.76365 16.2727 10.8182 16.2727C13.8727 16.2727 16.2727 13.8727 16.2727 10.8182V6.45455C16.2727 3.4 13.8727 1 10.8182 1Z" stroke="#5F6A77" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 10.8184C1 16.2729 5.36364 20.6365 10.8182 20.6365C16.2727 20.6365 20.6364 16.2729 20.6364 10.8184" stroke="#5F6A77" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.27271 25H17.3636" stroke="#5F6A77" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.8182 20.6367V25.0004" stroke="#5F6A77" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M10.3818 15.6182C8.63639 14.7455 7.54547 12.8909 7.54547 10.8182V6.45454C7.54547 3.4 9.94547 1 13 1C16.0546 1 18.4546 3.4 18.4546 6.45454V7.54545" stroke="#F95A39" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.0182 20.5273C12.3455 20.5273 12.6727 20.6364 13 20.6364C15.7273 20.6364 18.1273 19.5455 19.9818 17.8C21.7273 16.0546 22.8182 13.5454 22.8182 10.8182" stroke="#F95A39" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.18182 10.8182C3.18182 14.0909 4.81818 17.0364 7.21818 18.7819" stroke="#F95A39" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.5455 25H7.54547" stroke="#F95A39" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13 20.6364V25" stroke="#F95A39" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 25L25 1" stroke="#F95A39" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        }   
    </Controller>
  )
}
