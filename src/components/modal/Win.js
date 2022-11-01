import React from "react";
import Xicon from "../icons/Xicon";
import Oicon from "../icons/Oicon";
import { useDispatch, useSelector } from "react-redux";
import { handleReset, handleNextRound } from "../../rtk/slices/Game";

export default function Win() {
  const dispatch = useDispatch();
  const Game = useSelector((state) => state.Game);
  const { winner } = Game;
  return (
    <div className="score">
      {winner && winner !== "no" ? (
        <>
          {" "}
          <p>You Win !</p>
          <h3
            className={`score_title ${
              winner === "o" ? "text-yellow" : "text-blue"
            }`}
          >
            {winner === "x" ? <Xicon /> : <Oicon />}
            Takes the round
          </h3>
        </>
      ) : (
        <h3 className="score_title text-yellow">No Winner </h3>
      )}
      <div className="score_btns">
        <button className="btn btn-sm" onClick={() => dispatch(handleReset())}>
          Quit
        </button>
        <button
          className="btn btn-sm btn-yellow"
          onClick={() => dispatch(handleNextRound())}
        >
          Next Round
        </button>
      </div>
    </div>
  );
}
