import React, { useEffect, useState } from "react";
import { GameFilter } from "../../components/games/gameFilter/GameFilter";
import { GameDetailsList } from "../../components/games/list/GameList";
import { UseFetch } from "../../hooks/UseFetch";
import { Loading } from "../home/Loading";
import styles from "./Category.module.css";

export const Category = () => {
  const [gameResult, setGameResult] = useState(null);
  const [category, setCategory] = useState("MMO");

  const { data, loading } = UseFetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games"
  );

  useEffect(() => {
    if (data) {
      setGameResult(data);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <GameFilter
        loading={loading}
        category={category}
        setCategory={setCategory}
      />

      {loading && <Loading />}

      <GameDetailsList
        gameResult={gameResult}
        isShowPagination={false}
        category={category}
      />
    </div>
  );
};
