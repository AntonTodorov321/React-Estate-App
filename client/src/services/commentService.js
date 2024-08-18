const baseUrl = `${import.meta.env.VITE_API_URL}/data/comment`;

import * as request from '../lib/request';

export const create = async (estateId, comment) => {
    const newComment = await request.post(baseUrl, {
        estateId,
        comment,
    });

    return newComment;
};

export const getCurrent = async (estateId) => {
    const query = new URLSearchParams({
        where: `estateId="${estateId}"`,
        load: `owner=_ownerId:users`
    });

    return await request.get(`${baseUrl}?${query}`);
}