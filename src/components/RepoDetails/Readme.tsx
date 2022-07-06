import { useParams, useOutletContext } from 'react-router-dom';
import useQuery from '../../hooks/useQuery';

export default function RepoDetails(props: any) {
  const appData: any = useOutletContext();
  const params = useParams();
  const repoData = appData.getRepoById(params.repoId);

  const readmeUrl = `https://raw.githubusercontent.com/${repoData.owner.login}/${repoData.name}/master/README.md`;
  const [data, error, loading] = useQuery(readmeUrl);

  return (
    <div>
      <div>
        {error && <div>Could not load details...</div>}
        {loading && <div>Loading...</div>}
        {data}
      </div>
    </div>
  );
}
