const baseUrl = 'http://localhost:3030/users';

import * as request from '../lib/request';

export const register = async (data) => request.post(`${baseUrl}/register`, data);
export const login = async (data) => request.post(`${baseUrl}/login`, data);