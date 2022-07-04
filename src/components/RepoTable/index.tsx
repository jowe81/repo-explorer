import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import FilterButtons from './FilterButtons';

export default function RepoTable() {
  const [repoData, setRepoData] = useState([]);
  const [filterLanguage, setFilterLanguage] = useState();

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
  }, []);

  const recordsToDisplay = repoData.filter((record: any) => {
    return filterLanguage ? record.language === filterLanguage : true;
  });

  const tableContent = recordsToDisplay.map((record: any) => {
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
    <>
      <FilterButtons
        repoData={[...repoData]}
        setFilterLanguage={setFilterLanguage}
      />
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
    </>
  );
}
