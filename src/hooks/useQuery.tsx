import { useEffect, useState } from 'react';
import axios from 'axios';
const useQuery = (url: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData]: any = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => res.data)
      .then((resData) => {
        setData(resData);
        setError(false);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setData(false);
        setLoading(false);
      });
  }, [url]);

  return [data, error, loading];
};

export default useQuery;
