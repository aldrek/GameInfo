import styles from "./GameItem.module.css";
import { AiFillWindows } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { isItemLiked, likeClicked } from "../../../util/GameUtil";

export const GameItem = ({ game, data, setData }) => {
  const navigate = useNavigate();

  const onLikeClicked = async (e) => {
    likeClicked(e, game, data, setData);
  };

  const isLiked = isItemLiked(data, game.id);

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
            <AiFillHeart
              fontSize="1.5em"
              className={isLiked ? styles.active : styles.not_active}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
