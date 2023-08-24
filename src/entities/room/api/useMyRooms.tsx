import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import type { IRoom } from './models';
import { useAuth0 } from "@auth0/auth0-react";

export const useMyRooms = () => {
    const [myRooms, setMyRooms] = useState<IRoom[]>([]);
    const [myLoading, setMyLoading] = useState(false);
    const [myError, setMyError] = useState('');
    const { user } = useAuth0();

    const API = String(import.meta.env.VITE_API);

    async function getRooms() {
        try {
            setMyError('');
            setMyLoading(true);
            const response = await axios.get<IRoom[]>(`${API}/user_channels/my/${user?.email}`);
            setMyRooms(response.data as any);
            setMyLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setMyLoading(false);
            setMyError(error.message);
        }
    }

    useEffect(() => {
        getRooms();
    }, []);

    return { myRooms, myLoading, myError }
}
