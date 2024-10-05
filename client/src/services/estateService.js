const baseUrl = `${import.meta.env.VITE_API_URL}/data/estates`;

import * as request from "../lib/request";

export const getAll = (page) => {
    const offset = (page - 1) * 3;
 
    const query = new URLSearchParams({
        load: 'owner=_ownerId:users',
        offset: offset <= 0 ? 0 : offset,
        pageSize: 3
    });

    return request.get(`${baseUrl}?${query}`);
};

export const getDetails = (estateId) => request.get(`${baseUrl}/${estateId}`);
export const create = (data) => request.post(baseUrl, data);
export const getOne = (estateId) => request.get(`${baseUrl}/${estateId}`);
export const edit = (data, estateId) => request.put(`${baseUrl}/${estateId}`, data);
export const remove = (estateId) => request.remove(`${baseUrl}/${estateId}`);
export const getLatest = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=3`);
export const getEstatesCount = () => request.get(`${baseUrl}?count=0`);