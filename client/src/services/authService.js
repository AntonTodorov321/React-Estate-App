const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

import * as request from '../lib/request';

export const register = (data) => request.post(`${baseUrl}/register`, data);
export const login = (data) => request.post(`${baseUrl}/login`, data);
export const logout = () => request.get(`${baseUrl}/logout`);