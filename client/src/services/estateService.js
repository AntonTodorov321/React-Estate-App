const baseUrl = "http://localhost:3030/data/estates";

import * as request from "../lib/request";

export const getAll = () => request.get(baseUrl);
export const getDetails = (estateId) => request.get(`${baseUrl}/${estateId}`);
export const create = (data) => request.post(baseUrl, data);
export const getOne = (estateId) => request.get(`${baseUrl}/${estateId}`);
export const edit = (data, estateId) => request.put(`${baseUrl}/${estateId}`, data);
export const remove = (estateId) => request.remove(`${baseUrl}/${estateId}`);

export const getLatest = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=3`);;