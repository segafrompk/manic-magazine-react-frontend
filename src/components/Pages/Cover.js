import React from 'react';
import { imageUrl } from '../../apis/urlHandler';
import { Photos, Videos, Gallery } from '../../svg/Svgs';

const Cover = ({ src, alt, contentTypes, square }) => {
    // TODO add mouse-over tooltips to types icons!!!
    let types = null;
    if (contentTypes && contentTypes.length > 0) {
        types = contentTypes.map((type, index) => {
            if (type.type === 'video') {
                return <Videos key={index} />;
            } else if (type.type === 'images') {
                return <Photos key={index} />;
            } else if (type.type === 'gallery') {
                return <Gallery key={index} />;
            }
            return null;
        });
    }
    return (
        <div
            className={`cover-image`}
            style={{ backgroundImage: `url(${imageUrl(src)})` }}
            aria-label={alt}
        >
            {types && <span className='content-types-container'>{types}</span>}
        </div>
    );
};

export default Cover;
