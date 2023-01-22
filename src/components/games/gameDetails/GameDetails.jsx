import React from "react";
import { openInNewTab } from "../../../util/WindowUtil";
import style from "./GameDetails.module.css";

export const GameDetails = ({ game }) => {
  if (game) {
    return (
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.left_section}>
            <img src={game.thumbnail} alt="test" />
            <button
              className={style.play}
              onClick={() => {
                openInNewTab(window, game.game_url);
              }}
            >
              Play
            </button>
          </div>
          <div className={style.right_side}>
            <span className={style.txt_headr}>{game.title}</span>
            <span className={style.txt_p}>{game.description}</span>
          </div>
        </div>
        <div className={style.additional_info}>
          <h3 className={style.txt_headr}>Additional Information</h3>
          <ul className={style.additional_info_list}>
            <li className={style.p}>
              <span className={style.txt_sub_headr}>Developer</span>
              <p> {game.developer}</p>
            </li>
            <li>
              <span className={style.txt_sub_headr}>Publisher</span>
              <p> {game.publisher}</p>
            </li>
            <li>
              <span className={style.txt_sub_headr}>Release date</span>
              <p> {game.release_date}</p>
            </li>
            <li>
              <span className={style.txt_sub_headr}>Status</span>
              <p> {game.status}</p>
            </li>
          </ul>
        </div>
        <div className={style.system_requirement_info}>
          <h1 className={style.txt_headr}>Minimum System Requirements</h1>
          {game.minimum_system_requirements && (
            <div>
              <ul className={style.additional_info_list}>
                <span>
                  <span className={style.txt_sub_headr}>Release date</span>
                  <p> {game.minimum_system_requirements.os}</p>
                </span>
                <span>
                  <span className={style.txt_sub_headr}>Release date</span>
                  <p> {game.minimum_system_requirements.processor}</p>
                </span>
                <span>
                  <span className={style.txt_sub_headr}>Release date</span>
                  <p> {game.minimum_system_requirements.memory}</p>
                </span>
                <span>
                  <span className={style.txt_sub_headr}>Release date</span>
                  <p> {game.minimum_system_requirements.graphics}</p>
                </span>
                <span>
                  <span className={style.txt_sub_headr}>Release date</span>
                  <p> {game.minimum_system_requirements.storage}</p>
                </span>
              </ul>
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
