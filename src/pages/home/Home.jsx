import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./Home.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { UseFetch } from "../../hooks/UseFetch";
import { GameDetailsList } from "../../components/games/list/GameList";
import { RxRows } from "react-icons/rx";
import { TfiLayoutColumn3 } from "react-icons/tfi";
import { Loading } from "./Loading";
import useRenderCount from "../../hooks/UseRender";

export const Home = () => {
  const [gameResult, setGameResult] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [gameListSystem, setGameListSystem] = useState("grid");

  const { data, loading } = UseFetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games"
  );

  useEffect(() => {
    if (data) {
      setGameResult(
        data.filter((game) =>
          game.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
        )
      );
    }
  }, [searchValue, data]);

  // Check rendering count
  const renderCount = useRenderCount();
  console.log("count:", renderCount);

  return (
    <div className={styles.container}>
      <h1>Best Games for PC and Browser in 2023!</h1>
      <p> {gameResult && gameResult.length} Game found</p>

      <div className={styles.search_layout_system}>
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
        <div className={styles.list_system}>
          <div
            className={`${
              gameListSystem === "grid"
                ? styles.border_active
                : styles.border_not_active
            } ${styles.icon_grid}`}
          >
            <TfiLayoutColumn3
              className={styles.icons}
              onClick={() => {
                setGameListSystem("grid");
              }}
            />
          </div>
          <div
            className={`${
              gameListSystem === "list"
                ? styles.border_active
                : styles.border_not_active
            } ${styles.icon_list}`}
          >
            <RxRows
              className={styles.icons}
              onClick={() => {
                setGameListSystem("list");
              }}
            />
          </div>
        </div>{" "}
      </div>

      {loading && <Loading />}

      <GameDetailsList
        gameResult={gameResult}
        gameListSystem={gameListSystem}
      />
    </div>
  );
};
