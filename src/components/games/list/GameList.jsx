import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { GameItem } from "../gameItem/GameItem";
import { GameItemHorizontal } from "../gameItemHorizontal/GameItemHorizontal";
import style from "./GameList.module.css";

export const GameDetailsList = ({
  gameResult: gameList,
  gameListSystem = "grid",
  isShowPagination = true,
  category,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPageSize] = useState(20);

  const currentItemEndPosition = currentPage * gamesPageSize;
  const currentItemStartPosition = currentItemEndPosition - gamesPageSize;

  const pageCount = Math.ceil(
    (gameList === null ? 1 : gameList.length) / gamesPageSize
  );

  let currentGameList = [];

  if (gameList !== null) {
    if (!category)
      currentGameList = gameList.slice(
        currentItemStartPosition,
        currentItemEndPosition
      );
    else {
      currentGameList = gameList.filter((game) => game.genre === category);
    }
  }

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <div className={style.container}>
      <div
        className={` ${
          gameListSystem === "grid"
            ? style.game_list
            : style.game_list_horizontal
        }`}
      >
        {currentGameList &&
          currentGameList.map((game) => {
            if (gameListSystem === "grid")
              return <GameItem key={game.id} game={game} />;
            else return <GameItemHorizontal key={game.id} game={game} />;
          })}
      </div>

      {gameList !== null && isShowPagination && (
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
        />
      )}
    </div>
  );
};
