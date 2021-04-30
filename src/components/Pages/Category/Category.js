import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import useFetch from '../../../apis/useFetch';
import { apiAddress } from '../../../apis/ENV';
import ArticleSmall from '../Home/ArticleSmall';
import ArticleBig from '../Home/ArticleBig';
import Loading from '../Loading';
import Pagination from './Pagination';

const Category = () => {
    const { categoryName } = useParams();
    let availablePages;
    let currentPage;
    const queriedPageNumber = new URLSearchParams(useLocation().search).get(
        'page'
    );
    const query =
        queriedPageNumber > 1
            ? `${apiAddress}/categories/${categoryName}?page=${queriedPageNumber}`
            : `${apiAddress}/categories/${categoryName}`;
    const {
        data: dataPosts,
        isPending: pendingPosts,
        error: errorPosts,
    } = useFetch(query);
    if (dataPosts !== null) {
        availablePages = dataPosts[dataPosts.length - 1].numberOfPages;
        currentPage = dataPosts[dataPosts.length - 1].currentPage;
    }
    return (
        <>
            {dataPosts && dataPosts.length > 1 && !pendingPosts && (
                <div className='category-body'>
                    <ArticleBig articleData={dataPosts[0]} />
                    <div className='article-grid'>
                        {dataPosts.map((post, index) => {
                            if (index === 0 || !post.id) {
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
                    {availablePages !== null && availablePages > 1 && (
                        <Pagination
                            availablePages={availablePages}
                            currentPage={currentPage}
                            requestUrl={(pageNumber) => `?page=${pageNumber}`}
                        />
                    )}
                </div>
            )}
            {pendingPosts && <Loading />}
            {errorPosts && <div>{errorPosts}</div>}
        </>
    );
};

export default Category;
