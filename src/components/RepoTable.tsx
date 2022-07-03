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

  const tableContent = repoData.map((record: any) => {
    return (
      <tr key={record.id}>
        <td>{record.name}</td>
        <td>{record.description}</td>
        <td>{record.language}</td>
        <td>{record.forks}</td>
      </tr>
    );
  });

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
      <tbody>{tableContent}</tbody>
    </Table>
  );
}
