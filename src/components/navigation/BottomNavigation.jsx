import React from "react";
import styles from "./BottomNavigation.module.css";
import { MdGamepad } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdTrendingUp } from "react-icons/md";

export const BottomNavigation = () => {
  return (
    <nav className={styles.bottom_navigation}>
      <div className={styles.tab}>
        <MdGamepad />
        <span>Home</span>
      </div>

      <div className={styles.tab}>
        <MdTrendingUp />
        <span>Popular</span>
      </div>

      <div className={styles.tab}>
        <MdFavorite />
        <span>Favorites</span>
      </div>
    </nav>
  );
};
