import useFetch from '../../../apis/useFetch';
import { apiAddress } from '../../../apis/ENV';
import Loading from '../Loading';

// import Helmet from 'react-helmet';
import HomeArticles from './HomeArticles';

const Home = () => {
    //TODO Add loading animation to all components!!!

    const {
        data: homePage,
        isPending: pendingHomePage,
        error: errorHomePage,
    } = useFetch(`${apiAddress}/homepage`);

    return (
        <>
            {pendingHomePage && <Loading />}
            {homePage && !pendingHomePage && <HomeArticles data={homePage} />}
            {errorHomePage && <div>{errorHomePage}</div>}
        </>
    );
};

export default Home;
