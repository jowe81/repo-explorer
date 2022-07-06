import { useParams, useOutletContext } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import useQuery from '../../hooks/useQuery';

export default function RepoDetails(props: any) {
  const appData: any = useOutletContext();
  const params = useParams();

  const repoData = appData.repoData.find((record: any) => {
    return record.id === Number(params.repoId);
  });

  const commitsUrl = `https://api.github.com/repos/${repoData.owner.login}/${repoData.name}/commits`;
  const [data, error, loading] = useQuery(commitsUrl);

  const latestCommit = data?.length ? data[0] : undefined;

  return (
    <div>
      <div>
        {error && <div>Could not load details...</div>}
        {loading && <div>Loading...</div>}
        {data && (
          <Table className="text-start">
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
