import { createContext, useState } from "react";

export const LikesContext = createContext([]);

export const LikesProvider = ({ children }) => {
  // Game favorite list state
  const [gameFavoriteList, setGameFavoriteList] = useState([]);

  const value = { gameFavoriteList, setGameFavoriteList };

  return (
    <LikesContext.Provider value={value}>{children}</LikesContext.Provider>
  );
};
