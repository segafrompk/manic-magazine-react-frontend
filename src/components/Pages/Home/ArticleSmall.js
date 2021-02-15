import React from 'react';
import { Link } from 'react-router-dom';
import Cover from '../Cover';
import TextDisplay from '../Home/TextDisplay';
import SocialShare from '../SocialShare';

const ArticleSmall = ({ articleData }) => {
    const {
        articleLead,
        articleId,
        articleCover,
        coverDescription,
        category,
        title,
        slug,
    } = articleData;
    const articleLink = `/posts/${slug}/${articleId}`;

    const categoryLink = `/categories/${category.slug}`;

    return (
        <div className='small-article'>
            <Link to={articleLink}>
                <Cover
                    src={articleCover.formats.medium.url}
                    alt={coverDescription}
                />

                <div className='small-article-padding'>
                    <div className='category-link'>
                        <Link to={categoryLink}>
                            {category.categoryName.toUpperCase()}
                        </Link>
                    </div>
                    <div className='article-title'>
                        <Link to={articleLink}>{title}</Link>
                    </div>
                    <TextDisplay text={articleLead} />

                    <div className='button small-article-button'>
                        Read more!
                    </div>
                    <SocialShare link={articleLink} title={title} />
                </div>
            </Link>
        </div>
    );
};

export default ArticleSmall;
