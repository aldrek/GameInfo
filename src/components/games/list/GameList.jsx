import React from "react";
import { GameItem } from "../gameItem/GameItem";
import style from "./GameList.module.css";

export const GameDetailsList = ({ gameResult: gameList }) => {
  console.log(gameList);
  return (
    <div className={style.game_list}>
      {gameList &&
        gameList.map((game) => {
          return <GameItem key={game.id} game={game} />;
        })}
    </div>
  );
};
