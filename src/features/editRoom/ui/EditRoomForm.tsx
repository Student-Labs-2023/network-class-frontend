import React, { useState } from 'react';
import { IRoom } from '../../../entities/room/api/models';
import { EditThunk } from '../model';
import { DeleteThunk } from '../model/delete';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import LobbyFormLayout from '../../../widgets/layout/LobbyFormLayout';
import Input from '../../../shared/ui/Input';
import SwitchToggle from '../../../shared/ui/switchToggle/SwitchToggle';
import FormButton from '../../../shared/ui/formButton/FormButton';
import avatar from '../../../../public/icons/avatar.svg';
import deleteIcon from '../../../../public/icons/delete.svg';
import { useAuth0 } from "@auth0/auth0-react";

const Form = styled.form`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

const Info = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
`

const ImageContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    border: 2px dashed #175EF1;
`

const Center = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

const Text = styled.p`
    font-family: var(--font);
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    color: var(--grey_1);
    width: 203px;
`

const Buttons = styled.div`
    display: flex;
    width: 159px;
    justify-content: space-between;
    align-items: center;
`

interface Props {
    room: IRoom,
}

export const EditRoomForm: React.FC<Props> = observer(({ room }) => {
    const { user } = useAuth0();
    const [title, setTitle] = useState(room.title);
    const [isPublic, setIsPublic] = useState(room.isPublic);

    function editRoom(event: any) {
        EditThunk(event, room, title, isPublic, user?.email);
    }

    function deleteRoom() {
        DeleteThunk(room.id, user?.email);
    }

  return (
    <LobbyFormLayout>
        <Form onSubmit={editRoom}>
            <Info>
                <ImageContainer>
                    <img src={avatar} alt="аватар" />
                </ImageContainer>
                <Input type="text" placeholder='Введите название класса' value={title} onChange={e => setTitle(e.target.value)} />
            </Info>
            <Center>
                <SwitchToggle value={isPublic} onClick={() => setIsPublic(!isPublic)}/>
                <Text>
                    Ваш класс будет виден всем пользователям приложения
                </Text>
            </Center>
            <Buttons>
                <FormButton>Сохранить</FormButton>
                <button type='button' onClick={deleteRoom}><img src={deleteIcon} alt="Удалить" /></button>
            </Buttons>
        </Form>
    </LobbyFormLayout>
  )
})
