import { apiAddress, siteAddress } from './.env';

const isExternal = new RegExp('^(https?:\\/\\/)');

export const imageUrl = (url) => {
    if (!!isExternal.test(url)) {
        return url;
    }
    return apiAddress + url;
};

export const fullUrl = (url) => {
    if (!!isExternal.test(url)) {
        return url;
    }
    return siteAddress + url;
};
