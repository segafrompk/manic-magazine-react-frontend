import { apiAddress } from './ENV';

const fixImageUrl = (url) => {
    url = url.replace(/(<img)\s(.[^>])*>/, (x) => {
        x = x.replace(/src="\/uploads\//, (y) =>
            y.replace('src="', `src="${apiAddress}`)
        );
        return x;
    });

    return url;
};

export default fixImageUrl;
