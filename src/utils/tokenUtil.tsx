import { get, set } from 'js-cookie';

export const getToken = (): string | undefined => get('token');

export const setToken = (token: string) => set('token', token);
