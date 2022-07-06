import { useParams, useOutletContext } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import useQuery from '../../hooks/useQuery';
import Status from '../Status';

export default function RepoDetails(props: any) {
  const appData: any = useOutletContext();
  const params = useParams();
  const repoData = appData.getRepoById(params.repoId);

  const commitsUrl = `https://api.github.com/repos/${repoData.owner.login}/${repoData.name}/commits`;
  const [data, error, loading] = useQuery(commitsUrl);

  const latestCommit = data?.length ? data[0] : undefined;

  return (
    <div>
      <div>
        {error && <Status error="Could not load commit data for this repo" />}
        {loading && <Status message="Loading commit data..." />}
        {data && (
          <Table className="container">
            <tbody>
              <tr>
                <td>Date:</td>
                <td>{latestCommit?.commit.author.date}</td>
              </tr>
              <tr>
                <td>Author:</td>
                <td>{latestCommit?.commit.author.name}</td>
              </tr>
              <tr>
                <td>Message:</td>
                <td>{latestCommit?.commit.message}</td>
              </tr>
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
}
