import React, { useState } from 'react';
import type { IRoom } from '../../../shared/api/models';
import styled from 'styled-components';
import JoinButton from './JoinButton';
import Tooltip from '../../../shared/ui/Tooltip';
import avatar from '../../../../public/icons/avatar.svg';
import callActive from '../../../../public/icons/call-active.svg';
import callDisabled from '../../../../public/icons/call-disabled.svg';
import { useAuth0 } from "@auth0/auth0-react";
import roomsFormState from '../../../pages/Lobby/store/roomsFormState';
import menuIcon from '../../../../public/icons/points.svg';
import Select from '../../../shared/ui/Select';

const Container = styled.div`
    position: relative;
    display: flex;
    width: calc(100% - 48px);
    padding: 24px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;

    border-radius: 10px;
    background: var(--white);
    box-shadow: 0px 0px 8px 0px #E5EAF8;
`

const Info = styled.div`
    display: flex;
    width: 329px;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.h3`
    width: 259px;
    font-family: var(--font);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    color: var(--black);
`

const Teacher = styled.h4`
    font-family: var(--font);
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    color: var(--black);
`

const Access = styled.div`
    display: flex;
    width: 229px;
    justify-content: space-between;
    align-items: center;
`

let Path = styled.path``

let Button = styled.button`
    transition: all .3s ease;
    &:hover ${Path} {
        stroke: var(--blue);
    }
`

interface Props {
    room: IRoom,
}

const RoomCard: React.FC<Props> = ({ room }) => {
    const [tooltipActive, setTooltipActive] = useState(false);
    const { user } = useAuth0();
    const [selectActive, setSelectActive] = useState(false);

    function copyLink() {
        setTooltipActive(true);
        Path = styled.path`
            stroke: var(--blue);
        `
        setTimeout(() => {
            setTooltipActive(false);
            Path = styled.path`
                stroke: #7E8A98;
            `
        }, 1500);
    }

    function changeSelect() {
        setSelectActive(!selectActive);
    }

    function openEditForm() {
        roomsFormState.openEditForm();
    }

    console.log(selectActive);

  return (
    <Container>
        <Info>
            <img src={avatar} alt="avatar" />
            <Title>{room.title}</Title>
        </Info>
        <Teacher>{room.owner}</Teacher>
        {room.isActive === true ? 
            <img src={callActive} alt='доступен'/> : 
            <img src={callDisabled} alt='недоступен'/>
        }
        <Access>
            <JoinButton/>
            <Tooltip active={tooltipActive}>
                <Button onClick={copyLink}>
                    <svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="align-back-1--back-design-layer-layers-pile-stack-arrange-square" clip-path="url(#clip0_202_644)">
                            <g id="align-back-1--back-design-layer-layers-pile-stack-arrange-square_2">
                                <Path id="Vector" d="M12.8571 0.928711H1.92857C1.21849 0.928711 0.642857 1.76018 0.642857 2.78585V18.5716C0.642857 19.5973 1.21849 20.4287 1.92857 20.4287H12.8571C13.5672 20.4287 14.1429 19.5973 14.1429 18.5716V2.78585C14.1429 1.76018 13.5672 0.928711 12.8571 0.928711Z" stroke="#7E8A98" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path id="Vector_2" d="M17.3571 6.5V23.2143C17.3571 23.7068 17.2216 24.1793 16.9806 24.5275C16.7395 24.8757 16.4124 25.0714 16.0714 25.0714H4.5" stroke="#7E8A98" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_202_644">
                                <rect width="18" height="26" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </Button>
            </Tooltip>
        </Access>
        {room.owner === user?.name ? 
            <>
                <button onClick={changeSelect}>
                    <img src={menuIcon} alt="меню" />
                </button>
                <Select active={selectActive}>
                    <button onClick={openEditForm}>изменить</button>
                </Select>
            </> : <></>
        }
    </Container>
  )
}

export default RoomCard;
