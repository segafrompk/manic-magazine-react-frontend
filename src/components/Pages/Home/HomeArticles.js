import ArticleBig from './ArticleBig';
import ArticleSmall from './ArticleSmall';

const HomeArticles = ({ data }) => {
    const filterObjects = (objectToFilter) => {
        let dataObject = {};
        for (const key in objectToFilter) {
            if (
                objectToFilter.hasOwnProperty(key) &&
                typeof objectToFilter[key] === 'object'
            ) {
                dataObject[key] = objectToFilter[key];
            }
        }
        return dataObject;
    };
    // const smallArticles = { ...data };
    // delete smallArticles.Hero;
    const dataArr = Object.values(filterObjects(data));
    return (
        <div className='category-body'>
            <ArticleBig articleData={data.Hero} />
            <div className='article-grid'>
                {data &&
                    dataArr.map((article, index) => {
                        if (index !== 0 && typeof article === 'object') {
                            return index % 5 === 0 ? (
                                <ArticleBig
                                    key={article.id}
                                    articleData={article}
                                />
                            ) : (
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
