import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import type { IRoom } from './models';
import { useAuth0 } from "@auth0/auth0-react";

export const useAccessRooms = () => {
    const [accessRooms, setAccessRooms] = useState<IRoom[]>([]);
    const [accessLoading, setAccessLoading] = useState(false);
    const [accessError, setAccessError] = useState('');
    const { user } = useAuth0();

    const API = String(import.meta.env.VITE_API);

    async function getRooms() {
        try {
            setAccessError('');
            setAccessLoading(true);
            const response = await axios.get<IRoom[]>(`${API}/user_channels/available/${user?.email}`);
            setAccessRooms(response.data as any);
            setAccessLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setAccessLoading(false);
            setAccessError(error.message);
        }
    }

    useEffect(() => {
        getRooms();
    }, []);

    return { accessRooms, accessLoading, accessError }
}
