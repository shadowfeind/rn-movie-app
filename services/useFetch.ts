import { useEffect, useState } from "react";

const useFetch = <T>(fetchFn: () => Promise<T>, autoFetch = true) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await fetchFn();
      setData(result);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setError(null);
    setIsLoading(false);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [autoFetch]);

  return { data, isLoading, error, fetchData, reset };
};

export default useFetch;
