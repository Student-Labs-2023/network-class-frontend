import { IUser } from "../../../shared/api/models";
import user from "../../../pages/Lobby/store/user";

export const AddUserThunk = (fullname: any, photo_url: string, email: any) => {
    const API = String(import.meta.env.VITE_API);

    const newUser = {
        full_name: fullname,
        photo_url: photo_url,
        email: email
    }

    fetch(`${API}/users`, {
      method : 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body : JSON.stringify(newUser),
    })
    .then(response => response.text())
    .then(response => {
        response = JSON.parse(response);
        console.log(response);
        user.addUser(JSON.parse(response));
    })
}

export const CreateThunk = (event: any, title: string, isPublic: boolean, user: IUser) => {
    event.preventDefault();
    AddUserThunk(user?.name, 'test', user?.email);
    const API = String(import.meta.env.VITE_API);
    console.log(user?.email);

    const newRoom = {
        title: title,
        url: 'https://network-class.pages.dev/joinlesson/1',
        photo_url: '',
        isActive: false,
        isPublic: isPublic,
        owner_email: user?.email
    }

    fetch(`${API}/channels`, {
      method : 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body : JSON.stringify(newRoom),
    })
    .then(response => response.text())
    .then(response => {
        response = JSON.parse(response);
        console.log(response);
    })
}
