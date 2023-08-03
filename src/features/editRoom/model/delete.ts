export const DeleteThunk= (id: number) => {
    const API = String(import.meta.env.VITE_API);

    fetch(`${API}/channels/${id}`, {
      method : 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then(response => response.text())
    .then(response => {
        response = JSON.parse(response);
        console.log(response);
    })
}