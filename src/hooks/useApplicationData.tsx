import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useApplicationData() {
  const [repoData, setRepoData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:4000/repos')
      .then((res) => {
        setRepoData(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  const getRepoById = (id: any) => {
    return repoData.find((record: any) => {
      return record.id === Number(id);
    });
  };

  return {
    repoData,
    loaded,
    getRepoById,
    error,
  };
}
