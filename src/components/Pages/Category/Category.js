import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../apis/useFetch';
import { apiAddress } from '../../../apis/ENV';
import ArticleSmall from '../Home/ArticleSmall';
import ArticleBig from '../Home/ArticleBig';
import Loading from '../Loading';

const Category = () => {
    const { categoryName } = useParams();
    const {
        data: dataPosts,
        isPending: pendingPosts,
        error: errorPosts,
    } = useFetch(`${apiAddress}/categories/${categoryName}`);
    return (
        <>
            {dataPosts && dataPosts.length !== 0 && !pendingPosts && (
                <div className='category-body'>
                    <ArticleBig articleData={dataPosts[0]} />
                    <div className='article-grid'>
                        {dataPosts.map((post, index) => {
                            if (index === 0) {
                                return false;
                            } else {
                                return (
                                    <ArticleSmall
                                        key={post.articleId}
                                        articleData={post}
                                    />
                                );
                            }
                        })}
                    </div>
                </div>
            )}
            {pendingPosts && <Loading />}
            {errorPosts && <div>{errorPosts}</div>}
        </>
    );
};

export default Category;
