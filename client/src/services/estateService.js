const baseUrl = "http://localhost:3030/data/estates";

import * as request from "../lib/request";

export const getAll = () => request.get(baseUrl);
export const getDetails = (estateId) => request.get(`${baseUrl}/${estateId}`);
export const create = (data) => request.post(baseUrl, data);
export const getOne = (estateId) => request.get(`${baseUrl}/${estateId}`);
export const edit = (estateId, data) => request.put(`${baseUrl}/${estateId}`, data);
export const remove = (estateId) => request.remove(`${baseUrl}/${estateId}`);

export const getLatest = () => {
    const query = new URLSearchParams({
        // sortBy: '_createdOn desc',
        offset: 0,
        pageSize: 3
    });

    return request.get(`${baseUrl}?${query}`);
};