import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../apis/useFetch';
import { apiAddress } from '../../../apis/ENV';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import DisplayArticle from './DisplayArticle';
import ArticleSmall from '../Home/ArticleSmall';

const SingleArticle = () => {
    const { articleId } = useParams();

    useEffect(() => {
        window.instgrm && window.instgrm.Embeds.process();
    }, [articleId]);

    const {
        data: dataArticle,
        isPending: pendingArticle,
        error: errorArticle,
    } = useFetch(`${apiAddress}/articles/${articleId}`);

    const {
        data: relatedPosts,
        isPending: pendingRelated,
        error: errorRelated,
    } = useFetch(`${apiAddress}/articles/${articleId}/related`);

    if (dataArticle) {
        const articleLink = `/posts/${dataArticle.slug}/${articleId}`;

        dataArticle.articleLink = articleLink;
        dataArticle.categoryLink = `/categories/${dataArticle.category.slug}`;

        if (articleLink !== window.location.pathname) {
            return <Redirect to={articleLink} />;
        }
    }

    return (
        <React.Fragment>
            {pendingArticle && <div>Loading...</div>}
            {errorArticle && <div>{errorArticle}</div>}
            {dataArticle && (
                <section>
                    <DisplayArticle data={dataArticle} />

                    <div className='article-grid'>
                        {pendingRelated && <div>Loading...</div>}
                        {errorRelated && <div>{errorRelated}</div>}
                        {relatedPosts &&
                            relatedPosts.map((article) => {
                                return (
                                    <ArticleSmall
                                        key={article.id}
                                        articleData={article}
                                    />
                                );
                            })}
                    </div>
                    <div className='button home-action-button'>Load more!</div>
                </section>
            )}
        </React.Fragment>
    );
};

export default SingleArticle;
