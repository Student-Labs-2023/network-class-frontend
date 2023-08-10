export const DeleteThunk= (id: number) => {
    const API = String(import.meta.env.VITE_API);

    fetch(`${API}/channels/`, {
      method : 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body : JSON.stringify({id}),
    })
    .then(response => response.text())
    .then(response => {
        response = JSON.parse(response);
        console.log(response);
    })
}