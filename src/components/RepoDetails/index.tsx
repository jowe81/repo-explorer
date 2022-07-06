import { useParams, useOutletContext, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import LatestCommit from './LatestCommit';
import Readme from './Readme';
import './index.css';

export default function RepoDetails(props: any) {
  const appData: any = useOutletContext();
  const params = useParams();
  const repoData = appData.getRepoById(params.repoId);

  return (
    <div>
      <div>Details for repo '{repoData.name}':</div>
      <div>
        <Link to="/">
          <Button>Return to Repo List</Button>
        </Link>
      </div>
      <hr />
      <h3>Latest Commit:</h3>
      <LatestCommit />
      <h3>README.md:</h3>
      <Readme />
    </div>
  );
}
