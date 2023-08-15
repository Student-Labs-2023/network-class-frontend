export const DeleteThunk= (id: number, email: any) => {
    const API = String(import.meta.env.VITE_API);

    const info = {
      user_email: String(email)
    }

    fetch(`${API}/channels/${id}`, {
      method : 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body : JSON.stringify(info),
    })
    .then(response => response.text())
    .then(response => {
        response = JSON.parse(response);
        console.log(response);
    })
}