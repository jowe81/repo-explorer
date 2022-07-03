import { useEffect } from 'react';
import axios from 'axios';

export default function RepoTable() {
  useEffect(() => {
    axios
      .get('http://localhost:4000/repos')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>The table</div>;
}
