import { tab } from "@testing-library/user-event/dist/tab";
import { GameDetailsList } from "../../components/games/list/GameList";
import { tabs } from "../../components/games/list/Types";

import styles from "./Favorite.module.css";

export const Favorites = () => {
  return (
    <div className={styles.container}>
      <GameDetailsList isShowPagination={false} tabName={tabs.favorite} />
    </div>
  );
};
