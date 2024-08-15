import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comment';

export const create = async (estateId, comment, username) => {
    const newComment = await request.post(baseUrl, {
        estateId,
        comment,
        username
    });

    return newComment;
};

export const getCurrent = async (estateId) => {
    const query = new URLSearchParams({
        where: `estateId="${estateId}"`
    });

    return await request.get(`${baseUrl}?${query}`);
}