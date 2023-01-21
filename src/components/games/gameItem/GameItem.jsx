import React from "react";
import styles from "./GameItem.module.css";
import { AiFillWindows } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";
import { AiFillLike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const GameItem = ({ game }) => {
  const navigate = useNavigate();

  const onLikeClicked = (e) => {
    console.log("Clicked:" + game.id);
    e.stopPropagation();
  };

  const routeToGame = (id) => {
    navigate(`/games/${id}`);
  };
  return (
    <div
      className={styles.game_item}
      onClick={() => {
        routeToGame(game.id);
      }}
    >
      <img className={styles.thumbnail} src={game.thumbnail} alt="test" />

      <div className={styles.container}>
        {/* title */}
        <h3>{game.title}</h3>

        {/* Description */}
        <p>{game.short_description}</p>

        {/* Info */}
        <div className={styles.info}>
          {/* genre */}
          <div className={styles.platform_genre}>
            {/* platform */}
            <span className={styles.platform}>{game.genre}</span>

            {game.platform.includes("PC (Windows)") && (
              <AiFillWindows className={styles.platform_icon} />
            )}
            {game.platform.includes("Web Browser") && (
              <GoBrowser className={styles.platform_icon} />
            )}
          </div>

          {/* Is liked */}
          <div className={styles.like} onClick={(e) => onLikeClicked(e)}>
            <AiFillLike />
          </div>
        </div>
      </div>
    </div>
  );
};
