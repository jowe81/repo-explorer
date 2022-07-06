import { useParams, useOutletContext, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import LatestCommit from './LatestCommit';
import Readme from './Readme';

export default function RepoDetails(props: any) {
  const appData: any = useOutletContext();
  const params = useParams();

  const repoData = appData.repoData.find((record: any) => {
    return record.id === Number(params.repoId);
  });
  console.log(repoData);
  //const repoFullName = `${repoData.owner.login}/${repoData.name}`;
  //const readmeUrl = `https://raw.githubusercontent.com/${repoFullName}/master/README.md`;

  //const readmeData = useQuery(readmeUrl).data;

  return (
    <div>
      <Link to="/">
        <Button>Go back</Button>
      </Link>
      <h3>Details for repo '{repoData.name}'</h3>
      <LatestCommit />
      <Readme />
    </div>
  );
}
