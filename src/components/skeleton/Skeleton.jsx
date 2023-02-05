import React from "react";
import { GameItemSk } from "./GameItemSk";

export const Skeleton = ({ type, count = 12 }) => {
  if (type === "gameList") return new Array(count).fill(<GameItemSk />);
  else if (type === "") return <div> Loading items</div>;
};
