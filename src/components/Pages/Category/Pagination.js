import { Link } from 'react-router-dom';

const Pagination = ({ availablePages, currentPage, requestUrl }) => {
    if (typeof availablePages === 'number' && typeof currentPage === 'number') {
        let firstPage;
        let lastPage;
        let showSkipToLast = false;
        let showSkipToFirst = false;
        if (availablePages > 9) {
            const availableOnTheRight = availablePages - currentPage;
            const availableOnTheLeft = currentPage - 1;
            if (availableOnTheLeft >= 4 && availableOnTheRight >= 4) {
                firstPage = currentPage - 4;
                lastPage = currentPage + 4;
                showSkipToFirst = availableOnTheLeft > 4 ? true : false;
                showSkipToLast = availableOnTheRight > 4 ? true : false;
            } else if (availableOnTheLeft < 4) {
                firstPage = 1;
                lastPage = 9;
                showSkipToLast = availablePages > 9 ? true : false;
            } else if (availableOnTheRight < 4) {
                firstPage = currentPage - (8 - availableOnTheRight);
                lastPage = availablePages;
                showSkipToFirst = firstPage > 1 ? true : false;
            }
        } else {
            firstPage = 1;
            lastPage = availablePages;
        }
        let boxesArr = [];
        for (let i = firstPage; i <= lastPage; i++) {
            const boxToPush =
                i === currentPage ? (
                    <span
                        key={i}
                        className={`${
                            currentPage === i ? 'pagination-current' : ''
                        }`}
                    >
                        {i}
                    </span>
                ) : (
                    <Link
                        key={i}
                        to={requestUrl(i)}
                        className={`${
                            currentPage === i ? 'pagination-current' : ''
                        }`}
                    >
                        {i}
                    </Link>
                );
            boxesArr.push(boxToPush);
        }
        return (
            <div className='pagination'>
                {showSkipToFirst && <Link to={requestUrl(1)}>{'<<'}</Link>}
                {boxesArr}
                {showSkipToLast && (
                    <Link to={requestUrl(availablePages)}>{'>>'}</Link>
                )}
            </div>
        );
    }
};

export default Pagination;
