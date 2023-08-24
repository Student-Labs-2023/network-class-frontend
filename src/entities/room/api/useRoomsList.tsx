import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import type { IRoom } from './models';

export const useRoomsList = () => {
    const [rooms, setRooms] = useState<IRoom[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const API = String(import.meta.env.VITE_API);

    async function getRooms() {
        try {
            setError('');
            setLoading(true);
            const response = await axios.get<IRoom[]>(`${API}/channels`);
            setRooms(response.data as any);
            setLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        getRooms();
    }, []);

    return { rooms, loading, error }
}
