const baseUrl = `${import.meta.env.VITE_API_URL}/data/call`;

import * as request from '../lib/request';

export const create = (estateId, call) => {
    const newCall = request.post(baseUrl, {
        estateId,
        call
    });

    return newCall;
};

export const getAll = (estateId) => {
    const query = new URLSearchParams({
        where: `estateId="${estateId}"`,
        load: `owner=_ownerId:users`,
    });

    return request.get(`${baseUrl}?${query}`);
};

export const getLast = (estateId) => {
    const query = new URLSearchParams({
        where: `estateId="${estateId}"`,
        sortBy: `_createdOn desc`,
        pageSize: 1
    });

    return request.get(`${baseUrl}?${query}`);
};