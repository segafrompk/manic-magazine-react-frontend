import ArticleBig from './ArticleBig';
import ArticleSmall from './ArticleSmall';

const HomeArticles = ({ data }) => {
    return (
        <div>
            <ArticleBig articleData={data.Hero} />
            <div className='article-grid'>
                <ArticleSmall articleData={data.position1} />
                <ArticleSmall articleData={data.position2} />
                <ArticleSmall articleData={data.position3} />
                <ArticleSmall articleData={data.position4} />
            </div>
            <div className='button home-action-button'>Load more!</div>
        </div>
    );
};

export default HomeArticles;
