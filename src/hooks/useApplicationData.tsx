import useQuery from './useQuery';

export default function useApplicationData() {
  //Retry to defeat terrible.js middleware on API server
  const retries = 5;

  const [repoData, error, loading] = useQuery(
    'http://localhost:4000/repos',
    retries
  );

  const getRepoById = (id: any) => {
    return repoData.find((record: any) => {
      return record.id === Number(id);
    });
  };

  return {
    repoData,
    getRepoById,
    error,
    loading,
  };
}
