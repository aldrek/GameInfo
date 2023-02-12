import React, { useContext, useMemo } from "react";
import { GamesContext } from "../../../context/games.contex";
import "./SimilarGames.css";
export const SimilarGames = ({ category }) => {
  const { gameList } = useContext(GamesContext);

  let similarGames = useMemo(() => {
    return gameList.filter((game) => game.genre === category).slice(0, 3);
  }, [gameList, category]);
  console.log("Game :", similarGames);
  return (
    <>
      <h1>Similar Games</h1>
      <div className="game_list">
        {similarGames.map((game) => {
          return (
            <img
              src={game.thumbnail}
              alt="test"
              placeholder="./assets/placeholder"
            />
          );
        })}
      </div>
    </>
  );
};
