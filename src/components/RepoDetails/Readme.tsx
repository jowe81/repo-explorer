import { useParams, useOutletContext } from 'react-router-dom';
import useQuery from '../../hooks/useQuery';
import Status from '../Status';

export default function RepoDetails(props: any) {
  const appData: any = useOutletContext();
  const params = useParams();
  const repoData = appData.getRepoById(params.repoId);

  const readmeUrl = `https://raw.githubusercontent.com/${repoData.owner.login}/${repoData.name}/master/README.md`;
  const [data, error, loading] = useQuery(readmeUrl);

  return (
    <div>
      <div>
        {error && <Status error="Could not load README.md for this repo" />}
        {loading && <Status message="Loading README.md..." />}
        {data}
      </div>
    </div>
  );
}
