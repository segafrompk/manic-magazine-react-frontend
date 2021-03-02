import fixImageUrl from './FixImageUrl';

const parseAllText = (text) => {
    if (text) {
        text = text.replace(/\+{3}.+\+{3}/, (x) => {
            x = `<span class='highlight'>${x.slice(3, x.length - 3)}</span>`;
            return x;
        });

        text = fixImageUrl(text);

        return text;
    }
};

export default parseAllText;
