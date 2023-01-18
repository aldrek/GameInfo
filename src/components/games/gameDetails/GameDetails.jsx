import React from "react";
import style from "./GameDetails.module.css";

export const GameDetails = ({ game }) => {
  if (game) {
    return (
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.img_info}>
            <img className={game.thumbnail} src={game.thumbnail} alt="test" />
            <button>Play</button>
          </div>
          <div className={style.base_info}>
            <span>{game.title}</span>
            <span>{game.description}</span>
          </div>
        </div>
        <div className={style.additional_info}>
          <h1>Additional Information</h1>
          <span>{game.developer}</span>
          <span>{game.publisher}</span>
          <span>{game.release_date}</span>
          <span>{game.status}</span>
        </div>
        <div className={style.system_requirement_info}>
          <h1>Minimum System Requirements</h1>
          {game.minimum_system_requirements && (
            <div>
              <span>{game.minimum_system_requirements.os}</span>
              <span>{game.minimum_system_requirements.processor}</span>
              <span>{game.minimum_system_requirements.memory}</span>
              <span>{game.minimum_system_requirements.graphics}</span>
              <span>{game.minimum_system_requirements.storage}</span>
            </div>
          )}
        </div>
        <div className={style.screen_shots}>
          <h1>Screenshots</h1>
          <div className={style.screen_shots_list}>
            {game.screenshots &&
              game.screenshots.map((screenshot) => {
                return (
                  <img
                    className={game.screen_shots}
                    src={screenshot.image}
                    alt="test"
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  } else {
    return <div className={style.container}>No game found</div>;
  }
};
