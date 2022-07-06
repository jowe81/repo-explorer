import useQuery from './useQuery';

export default function useApplicationData() {
  const [repoData, error] = useQuery('http://localhost:4000/repos');

  const getRepoById = (id: any) => {
    return repoData.find((record: any) => {
      return record.id === Number(id);
    });
  };

  return {
    repoData,
    getRepoById,
    error,
  };
}
