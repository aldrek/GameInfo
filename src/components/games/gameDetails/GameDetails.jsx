import React from "react";
import { gameSystemRequirement_info } from "../../../util/GameUtil";
import { openInNewTab } from "../../../util/WindowUtil";
import style from "./GameDetails.module.css";
import { SimilarGames } from "./SimilarGames";

export const GameDetails = ({ game }) => {
  const minRequirmentArr = gameSystemRequirement_info;

  if (game) {
    return (
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.left_section}>
            <img
              src={game.thumbnail}
              alt="test"
              placeholder="./assets/placeholder"
            />
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
                {minRequirmentArr.map((minRequirment) => {
                  const minRequirmentLowerCase = minRequirment.toLowerCase();
                  return (
                    <span>
                      <span className={style.txt_sub_headr}>
                        {minRequirment}
                      </span>
                      <p>
                        {
                          game.minimum_system_requirements[
                            minRequirmentLowerCase
                          ]
                        }
                      </p>
                    </span>
                  );
                })}
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
        <SimilarGames category={game.genre} />
      </div>
    );
  } else {
    return <div className={style.container}>No game found</div>;
  }
};
