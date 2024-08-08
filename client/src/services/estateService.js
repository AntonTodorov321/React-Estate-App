const baseUrl = "http://localhost:3030/data/estates";

import * as request from "../lib/request";

export const getAll = async () => await request.get(baseUrl);

export const getDetails = async (estateId) => await request.get(`${baseUrl}/${estateId}`);