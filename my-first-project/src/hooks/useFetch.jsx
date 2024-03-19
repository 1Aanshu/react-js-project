import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const controller = new AbortController();
      const signal = controller.signal;
      const getData = async () => {
        setLoading(true);
        const response = await fetch(url, { signal });
        const result = await response.json();
        setData(result);
        return () => {
          controller.abort();
        };
      };
      getData();
    } catch (e) {
      setError(e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, [url]);
  return { data, error, loading };
};

export default useFetch;
