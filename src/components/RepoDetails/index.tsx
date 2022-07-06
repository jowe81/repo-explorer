import { useParams, useOutletContext, Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import useQuery from '../../hooks/useQuery';

export default function RepoDetails(props: any) {
  const appData: any = useOutletContext();
  const params = useParams();

  const repoData = appData.repoData.find((record: any) => {
    return record.id === Number(params.repoId);
  });

  const repoFullName = `${repoData.owner.login}/${repoData.name}`;
  const commitsUrl = `https://api.github.com/repos/${repoFullName}/commits`;
  const readmeUrl = `https://raw.githubusercontent.com/${repoFullName}/master/README.md`;

  const readmeData = useQuery(readmeUrl).data;
  const commits = useQuery(commitsUrl).data;

  let content = <div>loading...</div>;

  if (commits?.length) {
    const latestCommit = commits[0];
    content = (
      <Table className="text-start">
        <thead>
          <tr>
            <th colSpan={2}>Details for repo '{repoData.name}'</th>
          </tr>
        </thead>
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
    );
  }

  return (
    <div>
      <Link to="/">
        <Button>Go back</Button>
      </Link>
      <div>{content}</div>
      <div>{readmeData}</div>
    </div>
  );
}
