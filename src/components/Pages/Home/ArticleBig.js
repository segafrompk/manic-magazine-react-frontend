import React from 'react';
import { Link } from 'react-router-dom';
import Cover from '../Cover';
// import SocialShare from '../SocialShare';
import TextDisplay from '../Home/TextDisplay';

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
    // const categoryLink = `/categories/${category.slug}`;

    // function limitWords(textToLimit, wordLimit) {
    //     var finalText = '';

    //     var text2 = textToLimit.replace(/\s+/g, ' ');

    //     var text3 = text2.split(' ');

    //     var numberOfWords = text3.length;

    //     var i = 0;

    //     if (numberOfWords > wordLimit) {
    //         for (i = 0; i < wordLimit; i++)
    //             finalText = finalText + ' ' + text3[i] + ' ';

    //         return finalText + '...';
    //     } else return textToLimit;
    // }
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
                    <TextDisplay text={articleLead} />
                    <div className='big-article-bottom-row'>
                        <div className='button big-article-button'>
                            Read more!
                        </div>
                        {/* <SocialShare link={articleLink} title={title} /> */}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ArticleBig;
