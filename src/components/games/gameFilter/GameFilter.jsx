import React, { useState } from "react";
import { gameCategoryList } from "../../../util/GameUtil";
import styles from "./GameFilter.module.css";

export const GameFilter = ({ isLoading, category, setCategory }) => {
  return (
    <div className={styles.container}>
      <span>Genre</span>
      <select
        id="platform"
        onChange={(e) => setCategory(e.target.value)}
        disabled={isLoading}
      >
        <option disabled value="Select category">
          Select Category
        </option>

        {gameCategoryList &&
          gameCategoryList.map((category) => {
            return <option value={category}>{category}</option>;
          })}
      </select>
    </div>
  );
};
