import useFetch from '../../../apis/useFetch';
import { apiAddress } from '../../../apis/ENV';

// import Helmet from 'react-helmet';
import HomeArticles from './HomeArticles';

const Home = () => {
    const {
        data: homePage,
        isPending: pendingHomePage,
        error: errorHomePage,
    } = useFetch(`${apiAddress}/homepage`);

    return (
        <>
            {pendingHomePage && <div>Loading...</div>}
            {homePage && <HomeArticles data={homePage} />}
            {errorHomePage && <div>{errorHomePage}</div>}
        </>
    );
};

export default Home;
