import React, { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import { GameDetailsList } from "../../components/games/list/GameList";
import styles from "./Favorite.module.css";

export const Favorites = () => {
  const [gameResult, setGameResult] = useState(null);

  const [data, setData] = useLocalStorage("likes", []);

  useEffect(() => {
    if (data) {
      setGameResult(data);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <GameDetailsList
        gameResult={gameResult}
        isShowPagination={false}
        isFavorite={true}
      />
    </div>
  );
};
