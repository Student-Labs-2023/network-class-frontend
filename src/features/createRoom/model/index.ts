export const CreateThunk= (event: any, title: string, isPublic: boolean) => {
    event.preventDefault();
    const API = String(import.meta.env.VITE_API);

    const newRoom = {
        name: title,
        public: isPublic,
        owner_id: 1
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
