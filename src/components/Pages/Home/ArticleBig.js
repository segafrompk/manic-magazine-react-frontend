import React from 'react';
import { Link } from 'react-router-dom';
import Cover from '../Cover';

const ArticleBig = ({ articleData }) => {
    const {
        articleLead,
        articleId,
        articleCover,
        coverDescription,
        category,
        title,
        slug,
        contentTypes,
    } = articleData;
    const articleLink = `/posts/${slug}/${articleId}`;
    return (
        <div className='big-article'>
            <Link to={articleLink}>
                <Cover
                    src={articleCover.url}
                    alt={coverDescription}
                    contentTypes={contentTypes}
                />

                <div className='big-article-padding'>
                    <div className='category-link'>
                        {category.categoryName.toUpperCase()}
                    </div>
                    <div className='article-title'>{title}</div>
                    <div className='article-text'>{articleLead}</div>
                    <div className='big-article-bottom-row'>
                        <div className='button big-article-button'>
                            Read more!
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ArticleBig;
