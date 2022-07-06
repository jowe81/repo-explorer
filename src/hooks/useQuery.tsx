import { useEffect, useState } from 'react';
import axios from 'axios';
import axiosRetry from 'axios-retry';

const client = axios.create();
axiosRetry(client, {
  retries: 5,
  retryDelay: () => 1000,
  retryCondition: () => true,
});

const useQuery = (url: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData]: any = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
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
  }, [url]);

  return [data, error, loading];
};

export default useQuery;
