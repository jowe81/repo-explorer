import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import FilterButtons from './FilterButtons';

export default function RepoTable(props: any) {
  const appData: any = useOutletContext();
  const [filterLanguage, setFilterLanguage] = useState();
  const navigate = useNavigate();

  const recordsToDisplay = appData.repoData.filter((record: any) => {
    return filterLanguage ? record.language === filterLanguage : true;
  });

  const showDetails = (repoId: number) => {
    navigate(`/details/${repoId}`);
  };

  const tableContent = recordsToDisplay.map((record: any) => {
    return (
      <tr key={record.id} onClick={() => showDetails(record.id)}>
        <td>{record.name}</td>
        <td>{record.description}</td>
        <td>{record.language}</td>
        <td>{record.forks}</td>
      </tr>
    );
  });

  return (
    <>
      <div>Click a button to filter by language:</div>
      <FilterButtons
        repoData={[...appData.repoData]}
        setFilterLanguage={setFilterLanguage}
      />
      <hr />
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
