import { apiAddress } from './ENV';

const parseAllText = (text) => {
    if (text) {
        text = text.replace(/\+{3}.+\+{3}/, (x) => {
            x = `<span class='highlight'>${x.slice(3, x.length - 3)}</span>`;
            return x;
        });

        text = text.replace(/(<img)\s(.[^>])*>/, (x) => {
            x = x.replace(/src="\/uploads\//, (y) =>
                y.replace('src="', `src="${apiAddress}`)
            );
            return x;
        });
        return text;
    }
};

export default parseAllText;
