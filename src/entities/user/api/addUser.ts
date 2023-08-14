import user from "../../../pages/Lobby/store/user";

export const AddUserThunk = (fullname: any, photo_url: string, email: any) => {
    const API = String(import.meta.env.VITE_API);

    const newUser = {
        fullname: fullname,
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
