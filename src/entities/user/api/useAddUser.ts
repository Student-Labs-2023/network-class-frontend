import { useState, useEffect } from 'react';

export const useAddUser = (fullname: any, photo_url: string, email: any) => {
    const API = String(import.meta.env.VITE_API);
    const [user, setUser] = useState({});

    const newUser = {
        full_name: fullname,
        photo_url: photo_url,
        email: email
    }

    async function createUser() {
      await fetch(`${API}/users`, {
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
          setUser(response);
      })
    }

    useEffect(() => {
      createUser();
    }, [])

  return user;
}
