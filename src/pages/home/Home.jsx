import React from "react";
import { useState } from "react";
import styles from "./Home.module.css";

export const Home = () => {
  const [gamesCount, setGamesCount] = useState(0);
  return (
    <div className={styles.container}>
      <h1>Best Games for PC and Browser in 2023!</h1>
      <p>{gamesCount} game found</p>
    </div>
  );
};
