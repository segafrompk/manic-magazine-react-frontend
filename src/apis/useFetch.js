import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState({
        data: null,
        isPending: true,
        error: null,
    });

    useEffect(() => {
        const abortCtrl = new AbortController();
        setData({ data: null, isPending: true, error: null });
        fetch(url, { signal: abortCtrl.signal })
            .then((res) => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                setData({ data: data, isPending: false, error: null });
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setData({
                        data: null,
                        isPending: false,
                        error: err.message,
                    });
                }
            });
        return () => abortCtrl.abort();
    }, [url]);
    return { data: data.data, isPending: data.isPending, error: data.error };
};

export default useFetch;
