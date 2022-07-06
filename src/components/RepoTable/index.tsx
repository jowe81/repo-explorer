import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import FilterButtons from './FilterButtons';
import Status from '../Status';

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
        repoData={appData.repoData}
        setFilterLanguage={setFilterLanguage}
      />
      <hr />
      {appData.error && (
        <Status error="Currently unable to load repo data - refresh the page to try again." />
      )}
      {!appData.error && (
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
      )}
    </>
  );
}
