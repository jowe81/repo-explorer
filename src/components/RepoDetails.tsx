import { useParams, useOutletContext } from 'react-router-dom';

export default function RepoDetails(props: any) {
  const appData: any = useOutletContext();
  const params = useParams();
  console.log('loaded', appData.loaded);
  console.log('Repo-Data', appData.repoData);
  return <div>Details for {params.repoId}</div>;
}
