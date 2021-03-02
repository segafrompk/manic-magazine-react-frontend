import { Link } from 'react-router-dom';
import Cover from '../Cover';

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
                    <div className='article-text'>{articleLead}</div>

                    <div className='button small-article-button'>
                        Read more!
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ArticleSmall;
