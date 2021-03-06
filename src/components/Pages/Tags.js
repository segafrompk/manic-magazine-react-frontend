import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../apis/useFetch';
import { apiAddress } from '../../apis/ENV';
import ArticleSmall from './Home/ArticleSmall';
import ArticleBig from './Home/ArticleBig';

const Category = () => {
    const { tag } = useParams();
    const {
        data: dataPosts,
        isPending: pendingPosts,
        error: errorPosts,
    } = useFetch(`${apiAddress}/tags/${tag}`);
    return (
        <div className='category-body'>
            {dataPosts && dataPosts.length !== 0 && (
                <>
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
                </>
            )}
            {pendingPosts && <div>Loading...</div>}
            {errorPosts && <div>{errorPosts}</div>}
        </div>
    );
};

export default Category;
