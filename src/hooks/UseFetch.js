import axios from "axios";
import { useEffect, useState } from "react";

export const UseFetch = (url) => {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url: url,
          params: { platform: "pc" },
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
        });

        if (response.status !== 200 || response.status !== 200) {
          throw new Error("Error call");
        }

        setLoading(false);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
