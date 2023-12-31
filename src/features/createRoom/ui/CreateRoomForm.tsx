import React, { useState } from 'react';
import { IUser } from '../../../shared/api/models';
import { useAuth0 } from "@auth0/auth0-react";
import { CreateThunk } from '../model';
import styled from 'styled-components';
import LobbyFormLayout from '../../../widgets/layout/LobbyFormLayout';
import Input from '../../../shared/ui/Input';
import SwitchToggle from '../../../shared/ui/switchToggle/SwitchToggle';
import FormButton from '../../../shared/ui/formButton/FormButton';
import addImageIcon from '../../../../public/icons/gallery-add.svg';

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
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    border: 2px dashed var(--blue, #175EF1);
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

export const CreateRoomForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [isPublic, setIsPublic] = useState(true);

    const { user } = useAuth0();

    function create(event: any) {
        CreateThunk(event, title, isPublic, user as IUser);
    }

  return (
    <LobbyFormLayout>
        <Form onSubmit={create}>
            <Info>
                <ImageContainer>
                    <img src={addImageIcon} alt="установить аватар" />
                </ImageContainer>
                <Input type="text" placeholder='Введите название класса' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </Info>
            <Center>
                <SwitchToggle value={isPublic} onClick={() => setIsPublic(!isPublic)}/>
                <Text>
                    Ваш класс будет виден всем пользователям приложения
                </Text>
            </Center>
            <FormButton>Создать</FormButton>
        </Form>
    </LobbyFormLayout>
  )
}