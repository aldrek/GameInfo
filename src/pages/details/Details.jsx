import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UseFetch } from "../../hooks/UseFetch";

export const Details = () => {
  let params = useParams();
  let id = params.id;

  const [gameResult, setGameResult] = useState(null);
  const { data, loading, error } = UseFetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/game",
    id
  );

  useEffect(() => {
    console.log(data);
    if (data) {
      setGameResult(data);
    }
  }, [data]);

  return <div>Details</div>;
};
