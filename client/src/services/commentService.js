import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/comment';

export const create = async (estateId, comment, username) => {
    const newComment = await request.post(baseUrl, {
        estateId,
        comment,
        username
    });

    return newComment;
};

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
}