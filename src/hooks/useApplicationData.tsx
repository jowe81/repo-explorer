import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useApplicationData() {
  const [repoData, setRepoData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log('Fetching...');
    axios
      .get('http://localhost:4000/repos')
      .then((res) => {
        console.log(res.data);
        setRepoData(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    repoData,
    loaded,
  };
}
