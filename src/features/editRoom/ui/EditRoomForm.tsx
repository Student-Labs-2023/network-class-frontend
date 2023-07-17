import React from 'react';
import styled from 'styled-components';
import Input from '../../../shared/ui/Input';
import SwitchToggle from '../../../shared/ui/switchToggle/SwitchToggle';
import FormButton from '../../../shared/ui/formButton/FormButton';
import avatar from '../../../../public/icons/avatar.svg';
import deleteIcon from '../../../../public/icons/delete.svg';

const Form = styled.form`
    position: relative;
    display: flex;
    width: calc(100% - 48px);
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    border-radius: 10px;
    background: var(--white);
    margin: 2px auto 25px;
    &::before {
        content: "";
        position: absolute;
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
        border-radius: 12px;
        background: linear-gradient(223deg, rgba(255, 178, 64, 0.90) 0%, rgba(216, 97, 196, 0.90) 50.52%, rgba(23, 94, 241, 0.90) 100%);
        z-index: -1;
    }
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

export const EditRoomForm: React.FC = () => {
  return (
    <Form>
        <Info>
            <ImageContainer>
                <img src={avatar} alt="аватар" />
            </ImageContainer>
            <Input type="text" placeholder='Введите название класса' value='математика 10 класс' />
            <SwitchToggle/>
            <FormButton>Сохранить</FormButton>
            <button><img src={deleteIcon} alt="Удалить" /></button>
        </Info>
    </Form>
  )
}
