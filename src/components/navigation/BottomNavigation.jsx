import React from "react";
import styles from "./BottomNavigation.module.css";
import { MdGamepad } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdTrendingUp } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { TabType } from "./TabTypes";
export const BottomNavigation = () => {
  const navigate = useNavigate();
  const tabClicked = (tab) => {
    switch (tab) {
      case TabType.home:
        navigate("/");
        break;

      case TabType.popular:
        navigate("/category");
        break;

      case TabType.favorite:
        navigate("/favorite");
        break;
      default:
    }
  };

  return (
    <nav className={styles.bottom_navigation}>
      <div className={styles.tab} onClick={() => tabClicked(TabType.home)}>
        <MdGamepad />
        <span>Home</span>
      </div>

      <div className={styles.tab} onClick={() => tabClicked(TabType.popular)}>
        <MdTrendingUp />
        <span>Popular</span>
      </div>

      <div className={styles.tab} onClick={() => tabClicked(TabType.favorite)}>
        <MdFavorite />
        <span>Favorites</span>
      </div>
    </nav>
  );
};
