import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton: React.FC = () => {
    const { logout } = useAuth0();

    function logoutFunc(event : any) {
        event.preventDefault();
        logout({ logoutParams: { returnTo: window.location.origin } });
    }

  return (
    <button onClick={logoutFunc}>Выйти</button>
  )
}
