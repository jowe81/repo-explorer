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
      <Link to="/">
        <Button>Go back</Button>
      </Link>
      <h3>Details for repo '{repoData.name}'</h3>
      <LatestCommit />
      <h3>README.md:</h3>
      <Readme />
    </div>
  );
}
