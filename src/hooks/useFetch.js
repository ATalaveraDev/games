import { useEffect, useState } from 'react';

export function useFetch(fetchFn, dataInitialState) {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(dataInitialState);
  const [error, setError] = useState();

  useEffect(() => {
    async function getData() {
      setIsFetching(true);
      
      try {
        const data = await fetchFn();
        setData(data.results);
      } catch (error) {
        setError('ERROR while fetching data');
      }
      
      setIsFetching(false);      
    }

    getData();
  }, [fetchFn]);

  return {
    data,
    isFetching,
    error
  };
}