import axios from "axios";
import { useEffect, useState } from "react";


export default function useFetch(url, query = "") {
  console.log(query);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    const baseUrl = `${url}?${query}`
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(baseUrl);
        setData(data);
      } catch (error) {
        setData([]);
      console.log(error);;
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [query, url]);
  return { isLoading, data };
}
