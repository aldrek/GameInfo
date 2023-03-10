import React, { useState, lazy, Suspense } from "react";
// import ReactPaginate from "react-paginate";
import useLocalStorage from "use-local-storage";
import { GameItem } from "../gameItem/GameItem";
import style from "./GameList.module.css";
import { listType } from "./Types";
import { tabs } from "./Types";
import { Pagination } from "@mui/material";

const GameItemHorizontal = lazy(() =>
  import("../gameItemHorizontal/GameItemHorizontal")
);

export const GameDetailsList = ({
  gameResult: gameList,
  gameListSystem = listType.grid,
  isShowPagination = true,
  category,
  tabName = tabs.home,
}) => {
  const [favoriteList, setFavoriteList] = useLocalStorage("likes", []);

  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPageSize] = useState(20);

  const currentItemEndPosition = currentPage * gamesPageSize;
  const currentItemStartPosition = currentItemEndPosition - gamesPageSize;

  const pageCount = Math.ceil(
    (!gameList ? 1 : gameList.length) / gamesPageSize
  );

  let currentGameList = [];

  if (tabName === tabs.favorite) {
    currentGameList = favoriteList;
  } else if (gameList !== null) {
    if (!category)
      currentGameList = gameList.slice(
        currentItemStartPosition,
        currentItemEndPosition
      );
    else {
      currentGameList = gameList.filter((game) => game.genre === category);
    }
  }

  // const handlePageChange = ({ selected }) => {
  //   setCurrentPage(selected + 1);
  // };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className={style.container}>
      <div
        className={` ${
          gameListSystem === listType.grid
            ? style.game_list
            : style.game_list_horizontal
        }`}
      >
        {currentGameList &&
          currentGameList.map((game) => {
            if (gameListSystem === listType.grid)
              return (
                <GameItem
                  key={game.id}
                  game={game}
                  data={favoriteList}
                  setData={setFavoriteList}
                />
              );
            else
              return (
                <Suspense fallback={<div />}>
                  <GameItemHorizontal
                    key={game.id}
                    game={game}
                    data={favoriteList}
                    setData={setFavoriteList}
                  />
                </Suspense>
              );
          })}
      </div>

      {gameList !== null && isShowPagination && (
        //  (
        //   <ReactPaginate
        //     previousLabel="Previous"
        //     nextLabel="Next"
        //     pageClassName="page-item"
        //     pageLinkClassName="page-link"
        //     previousClassName="page-item"
        //     previousLinkClassName="page-link"
        //     nextClassName="page-item"
        //     nextLinkClassName="page-link"
        //     breakLabel="..."
        //     breakClassName="page-item"
        //     breakLinkClassName="page-link"
        //     pageCount={pageCount}
        //     marginPagesDisplayed={2}
        //     pageRangeDisplayed={5}
        //     onPageChange={handlePageChange}
        //     containerClassName="pagination"
        //     activeClassName="active"
        //   />
        // )

        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
        />
      )}
    </div>
  );
};
