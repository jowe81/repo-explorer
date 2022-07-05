import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useOutletContext, Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

export default function RepoDetails(props: any) {
  const [commits, setCommits]: any = useState([]);
  const [error, setError] = useState(false);

  const appData: any = useOutletContext();
  const params = useParams();

  const repoData = appData.repoData.find((record: any) => {
    return record.id === Number(params.repoId);
  });

  const commitsUrl = `https://api.github.com/repos/${repoData.owner.login}/${repoData.name}/commits`;

  useEffect(() => {
    axios
      .get(commitsUrl)
      .then((res: any) => {
        setCommits(res.data);
      })
      .catch((err) => {
        setError(true);
      });
  }, [commitsUrl]);

  let content;

  if (error) {
    content = <div>Unable to load commits</div>;
  } else {
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
    </div>
  );
}
