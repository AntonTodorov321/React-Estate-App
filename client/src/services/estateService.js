const baseUrl = "http://localhost:3030/data/estates";

import * as request from "../lib/request";

export const getAll = () => request.get(baseUrl);
export const getDetails = (estateId) => request.get(`${baseUrl}/${estateId}`);
export const create = (data) => request.post(baseUrl, data);