import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

export default function RepoTable() {
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/repos')
      .then((res) => {
        console.log(res.data);
        setRepoData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [repoData]);

  return (
    <Table striped={true} bordered={true} hover={true}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Language</th>
          <th>Fork Count</th>
        </tr>
      </thead>
      <tbody />
    </Table>
  );
}
