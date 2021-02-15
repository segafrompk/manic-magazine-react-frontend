import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { fullUrl } from '../../apis/urlHandler';

const SocialShare = ({ link, title }) => {
    link = fullUrl(link);
    return (
        <div className='social-share'>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${link}`,
                        'pop',
                        'width=600, height=400, scrollbars=no, resizable=no, location=no, toolbar=no'
                    );
                }}
            >
                <FontAwesomeIcon icon={faFacebookF} />
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    window.open(
                        `https://twitter.com/intent/tweet?text=${
                            title + ' ' + link
                        }`,
                        'pop',
                        'width=600, height=400, scrollbars=no, resizable=no, location=no, toolbar=no'
                    );
                }}
            >
                <FontAwesomeIcon icon={faTwitter} />
            </button>
        </div>
    );
};
export default SocialShare;
