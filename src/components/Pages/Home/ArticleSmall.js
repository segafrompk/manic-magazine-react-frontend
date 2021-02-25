// import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cover from '../Cover';
import TextDisplay from '../Home/TextDisplay';
// import ArticleContentType from './ArticleContentType';

const ArticleSmall = ({ articleData }) => {
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
    // const categoryLink = `/categories/${category.slug}`;
    // const sizeRefArticle = useRef(null);
    // const [elementWidth, setElementWidth] = useState(null);
    // const sizeRefElement = useRef(elementWidth);
    // const [articleWidth, setArticleWidth] = useState(null);

    // const updateElementWidth = (size) => {
    //     sizeRefElement.current = size;
    //     setElementWidth(size);
    // };
    // useEffect(() => {
    //     const widthArticle = sizeRefArticle.current
    //         ? sizeRefArticle.current.offsetWidth
    //         : 0;
    //     setArticleWidth(widthArticle);
    // }, [sizeRefElement]);
    return (
        <div className='small-article'>
            <Link to={articleLink}>
                {articleCover && (
                    <Cover
                        src={
                            articleCover.formats.medium.url ?? articleCover.url
                        }
                        alt={coverDescription}
                        contentTypes={contentTypes}
                    />
                )}
                <div className='small-article-padding'>
                    <div className='category-link'>
                        {category.categoryName.toUpperCase()}
                    </div>
                    <div className='article-title'>{title}</div>
                    <TextDisplay text={articleLead} />

                    <div className='button small-article-button'>
                        Read more!
                    </div>
                    {/* <SocialShare link={articleLink} title={title} /> */}
                    {/* <ArticleContentType
                        reportSize={(size) => {
                            updateElementWidth(size);
                        }}
                        style={{
                            left: articleWidth / 2 - sizeRefElement.current / 2,
                        }}
                        contentType={contentTypes}
                    /> */}
                </div>
            </Link>
        </div>
    );
};

export default ArticleSmall;
