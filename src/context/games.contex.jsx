import { createContext, useState } from "react";

export const GamesContext = createContext([]);

export const GamesProvider = ({ children }) => {
  // Game favorite list state
  const [gameList, setGameList] = useState([]);

  const value = { gameList, setGameList };

  return (
    <GamesContext.Provider value={value}>{children}</GamesContext.Provider>
  );
};
