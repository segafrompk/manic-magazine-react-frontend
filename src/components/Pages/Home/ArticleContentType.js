import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    // faPhotoVideo,
    faImages,
    faImage,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';

const ArticleContentType = ({ contentType, reportSize, style }) => {
    const sizeRef = useRef(null);
    useEffect(() => {
        reportSize &&
            reportSize(sizeRef.current ? sizeRef.current.offsetWidth : 0);
    });
    if (contentType && contentType.length !== 0) {
        return (
            <div ref={sizeRef} className='content-type' style={style}>
                {contentType &&
                    contentType.map((type, index) => {
                        let icon;
                        if (type.type === 'video') {
                            icon = faVideo;
                        } else if (type.type === 'images') {
                            icon = faImage;
                        } else if (type.type === 'gallery') {
                            icon = faImages;
                        }
                        return (
                            icon && (
                                <span key={type.type + index}>
                                    {<FontAwesomeIcon icon={icon} />}
                                </span>
                            )
                        );
                    })}
            </div>
        );
    }
    return null;
};

export default ArticleContentType;
