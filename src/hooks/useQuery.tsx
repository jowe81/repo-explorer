import { useEffect, useState } from 'react';
import axios from 'axios';
import axiosRetry from 'axios-retry';

const useQuery = (url: any, retries: number = 0) => {
  const [loading, setLoading] = useState(true);
  const [data, setData]: any = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const client = axios.create();
    axiosRetry(client, {
      retries,
      retryDelay: () => 1000,
      retryCondition: () => true,
    });

    client
      .get(url)
      .then((res) => res.data)
      .then((resData) => {
        setData(resData);
        setError(false);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setData([]);
        setLoading(false);
      });
  }, [url, retries]);

  return [data, error, loading];
};

export default useQuery;
