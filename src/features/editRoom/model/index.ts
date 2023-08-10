export const EditThunk= (event: any, id: number, title: string, isPublic: boolean) => {
    event.preventDefault();
    const API = String(import.meta.env.VITE_API);

    const editedRoom = {
      name: title,
      public: isPublic,
    }

    fetch(`${API}/channels/${id}`, {
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