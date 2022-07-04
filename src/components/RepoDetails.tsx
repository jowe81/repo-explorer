import { useParams } from 'react-router-dom';

export default function RepoDetails() {
  const params = useParams();
  return <div>Details for {params.repoId}</div>;
}
