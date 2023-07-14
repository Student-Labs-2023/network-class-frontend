import React from 'react';
import styled from 'styled-components';
import Input from '../../../shared/ui/Input';
import SwitchToggle from './switchToggle/SwitchToggle';
import addImageIcon from '../../../../public/icons/gallery-add.svg';

const Form = styled.form`
    position: relative;
    display: flex;
    width: calc(100% - 52px);
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    border-radius: 10px;
    background: var(--white);
    margin: 2px 2px 25px 2px;
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

const CreateButton = styled.button`
    font-family: var(--font);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--orange);

    display: flex;
    height: 44px;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    border-radius: 8px;
    border: 1px solid var(--orange);
    background: var(--white);
    box-shadow: 0px 2px 6px 0px #C5CCD5;
    transition: all .3s;
    &:hover {
        color: var(--white);
        background: var(--orange);
    }
`

const CreateRoomForm: React.FC = () => {
  return (
    <Form>
        <Info>
            <ImageContainer>
                <img src={addImageIcon} alt="установить аватар" />
            </ImageContainer>
            <Input type="text" placeholder='Введите название класса' />
        </Info>
        <Center>
            <SwitchToggle/>
            <Text>
                Ваш класс будет виден всем пользователям приложения
            </Text>
        </Center>
        <CreateButton>Создать</CreateButton>
    </Form>
  )
}

export default CreateRoomForm;
