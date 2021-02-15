import React from 'react';
import { imageUrl } from '../../apis/urlHandler';

const Cover = ({ src, alt, square }) => {
    return (
        <div
            className={`cover-image`}
            style={{ backgroundImage: `url(${imageUrl(src)})` }}
            aria-label={alt}
        ></div>
    );
};

export default Cover;
