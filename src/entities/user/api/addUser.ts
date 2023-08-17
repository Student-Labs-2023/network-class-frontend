import userState from "../../../pages/Lobby/store/userState";

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
        userState.addUser(JSON.parse(response));
    })
}
