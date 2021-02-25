import ArticleBig from './ArticleBig';
import ArticleSmall from './ArticleSmall';

const HomeArticles = ({ data }) => {
    const smallArticles = { ...data };
    delete smallArticles.Hero;
    const dataArr = Object.values(smallArticles);
    return (
        <div>
            <ArticleBig articleData={data.Hero} />
            <div className='article-grid'>
                {data &&
                    dataArr.map((article, index) => {
                        if (index !== 0 && typeof article === 'object') {
                            return (
                                <ArticleSmall
                                    key={article.id}
                                    articleData={article}
                                />
                            );
                        } else {
                            return false;
                        }
                    })}
            </div>
            {/* <div className='button home-action-button'>Load more!</div> */}
        </div>
    );
};

export default HomeArticles;
