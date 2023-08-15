import { IRoom } from '../../../entities/room/api/models';

export const EditThunk= (event: any, room: IRoom, title: string, isPublic: boolean, email: any) => {
    event.preventDefault();
    const API = String(import.meta.env.VITE_API);

    const editedRoom = {
      user_email: email,
      title: title, //change
      photo_url: room.photo_url,
      url: room.url,
      isPublic: isPublic, //change
      isActive: room.isActive
    }

    fetch(`${API}/channels/${room.id}`, {
      method : 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body : JSON.stringify(editedRoom),
    })
    .then(response => response.text())
    .then(response => {
        response = JSON.parse(response);
        console.log(response);
    })
}