const baseUrl = `${import.meta.env.VITE_API_URL}/data/estates`;
const viewsUrl = `${import.meta.env.VITE_API_URL}/data/views`;

import * as request from "../lib/request";

export const getEstates = async (page, range, filter) => {
    const offset = (page - 1) * 3;

    const query = new URLSearchParams({
        load: 'owner=_ownerId:users',
        offset: offset <= 0 ? 0 : offset,
        pageSize: 3,
    });

    const whereConditions = [];
    if (filter.location) whereConditions.push(`location="${filter.location}"`);
    if (filter.typeOfEstate) whereConditions.push(`typeOfEstate="${filter.typeOfEstate}"`);

    if (whereConditions.length > 0) {
        query.append('where', whereConditions.join(' AND '));
    };

    const estates = await request.get(`${baseUrl}?${query}`);
    const filtredEstates = filterEstates(estates, range, filter.currency);
    
    return filtredEstates;
};

const filterEstates = (estates, range, currency) => {
    return estates.filter(estate => {
        let price = estate.price;

        if (estate.currency === 'lv' && currency === 'EUR') {
            price /= 2;
        } else if (estate.currency === 'EUR' && currency === 'lv') {
            price *= 2;
        };

        return price >= range[0] && price <= range[1];
    });
};

export const getViews = async (estateId) => {
    const query = new URLSearchParams({
        where: `estateId="${estateId}"`
    });

    const views = await request.get(`${viewsUrl}?${query}`);

    if (views.length === 0) {
        request.post(viewsUrl, {
            estateId,
            views: 1
        });

        return 1;
    } else {
        const viewId = views[0]._id;
        const newViewCount = views[0].views + 1;

        request.patch(`${viewsUrl}/${viewId}`, {
            views: newViewCount
        });

        return newViewCount;
    };
};

export const getDetails = (estateId) => request.get(`${baseUrl}/${estateId}`);
export const create = (data) => request.post(baseUrl, data);
export const getOne = (estateId) => request.get(`${baseUrl}/${estateId}`);
export const edit = (data, estateId) => request.put(`${baseUrl}/${estateId}`, data);
export const remove = (estateId) => request.remove(`${baseUrl}/${estateId}`);
export const getLatest = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=3`);
export const getEstatesCount = () => request.get(`${baseUrl}?count=0`);