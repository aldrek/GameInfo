import React from "react";
import styles from "./GameItem.module.css";
import { AiFillWindows } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";
import { AiFillLike } from "react-icons/ai";

export const GameItem = ({ game }) => {
  return (
    <div className={styles.game_item}>
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
          <div className={styles.like}>
            <AiFillLike />
          </div>
        </div>
      </div>
    </div>
  );
};
