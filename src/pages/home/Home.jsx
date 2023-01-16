import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./Home.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { UseFetch } from "../../hooks/UseFetch";
import { GameDetailsList } from "../../components/games/list/GameList";

export const Home = () => {
  const [gameResult, setGameResult] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const { data, loading, error } = UseFetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games"
  );

  useEffect(() => {
    if (data)
      setGameResult(
        data.filter((game) =>
          game.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
        )
      );
  }, [searchValue, data]);

  return (
    <div className={styles.container}>
      <h1>Best Games for PC and Browser in 2023!</h1>
      <p> {gameResult && gameResult.length} Game found</p>

      <form className={styles.form_search}>
        <AiOutlineSearch className={styles.search_icon} />
        <input
          placeholder="Search for games"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        ></input>
        {searchValue && (
          <MdCancel
            onClick={() => {
              setSearchValue("");
            }}
            className={styles.clear}
          />
        )}
      </form>
      <GameDetailsList gameResult={gameResult} />
    </div>
  );
};
