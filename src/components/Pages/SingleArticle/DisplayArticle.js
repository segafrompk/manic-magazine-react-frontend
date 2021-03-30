import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { fullUrl } from '../../../apis/urlHandler';
import Cover from '../Cover';
// import SocialShare from '../SocialShare';
import TextDisplay from '../Home/TextDisplay';
import {
    facebookScript,
    facebookRoot,
    instagramScript,
    twitterScript,
} from './embeds';

const DisplayArticle = ({ data }) => {
    const {
        articleBody,
        articleCover,
        coverDescription,
        category,
        photoAuthor,
        textAuthor,
        title,
        tagsCollection,
        // articleLink,
        categoryLink,
        galleries,
    } = data;

    let tagCollection;
    if (tagsCollection) {
        tagCollection = tagsCollection.map((tag) => {
            return (
                <Link key={tag.tag} to={`/tags/${tag.tag}`}>
                    <div className='button single-article-button'>
                        {tag.tag}
                    </div>
                </Link>
            );
        });
    }

    const embedSocialScripts = () => {
        const fb = document.querySelector('div.raw-html-embed div.fb-post');
        const twitter = document.querySelector('blockquote.twitter-tweet');
        const instagram = document.querySelector('blockquote.instagram-media');

        if (fb !== null) {
            document.querySelector('body').prepend(facebookRoot);
            document.querySelector('body').prepend(facebookScript);
        }

        if (instagram !== null) {
            document.querySelector('body').append(instagramScript);
        }

        if (twitter !== null) {
            document.querySelector('body').prepend(twitterScript);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        embedSocialScripts();
        window.instgrm && window.instgrm.Embeds.process();
        window.FB &&
            window.FB.init({
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v9.0',
            });
    }, [articleBody]);

    return (
        <div className='single-article'>
            <Cover src={articleCover.url} alt={coverDescription} />
            <div className='single-article-padding'>
                <Link to={categoryLink}>
                    <div className='button single-article-button category-link-button'>
                        {category.categoryName.toUpperCase()}
                    </div>
                </Link>

                <div className='article-title'>{title}</div>
                {photoAuthor && photoAuthor.length !== 0 && (
                    <div className='credits'>
                        PHOTOS BY:
                        {
                            <span className='author-link highlight'>
                                {' ' + photoAuthor}
                            </span>
                        }
                    </div>
                )}
                {textAuthor && textAuthor.length !== 0 && (
                    <div className='credits'>
                        WRITTEN BY:
                        {
                            <span className='author-link highlight'>
                                {' ' + textAuthor}
                            </span>
                        }
                    </div>
                )}
                <TextDisplay text={articleBody} galleries={galleries} />
                <div className='single-article-bottom-row'>
                    <div className='single-article-bottom-row-links'>
                        <div>
                            <div className='button single-article-button'>
                                Source
                            </div>
                            <Link id='category-link-button' to={categoryLink}>
                                <div className='button single-article-button'>
                                    {category.categoryName}
                                </div>
                            </Link>
                        </div>
                        <div>
                            <div className='button single-article-button'>
                                Related posts
                            </div>
                            {tagCollection && tagCollection}
                        </div>
                    </div>
                    {/* <SocialShare link={fullUrl(articleLink)} title={title} /> */}
                </div>
            </div>
        </div>
    );
};

export default DisplayArticle;
