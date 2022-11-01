import React from "react";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";
import { useDispatch, useSelector } from "react-redux";
import { setActiveUser, changePlayMode } from "../../rtk/slices/Game";

export default function Start() {
  const dispatch = useDispatch();
  const Game = useSelector((state) => state.Game);
  const { activeUser } = Game;

  return (
    <>
      <div className="start">
        <div className="start__header">
          <Xicon />
          <Oicon />
        </div>
        <div className="card shadow-gray">
          <h2>PICK PLAYER 1'ST MARK</h2>
          <div className="start_players">
            <span
              onClick={() => dispatch(setActiveUser("x"))}
              className={activeUser === "x" ? "start-active" : ""}
            >
              <Xicon color={activeUser === "x" ? "dark" : "light"} />
            </span>
            <span
              onClick={() => dispatch(setActiveUser("o"))}
              className={activeUser === "o" ? "start-active" : ""}
            >
              <Oicon color={activeUser === "o" ? "dark" : "light"} />
            </span>
          </div>
          <p className="text">REMEMBER: X GOES FIRST</p>
        </div>
        <div className="start_btns">
          <button
            className="btn  btn-yellow"
            onClick={() => dispatch(changePlayMode("cpu"))}
          >
            new game (vs cpu)
          </button>
          <button
            className="btn  btn-blue"
            onClick={() => dispatch(changePlayMode("user"))}
          >
            new game (vs player)
          </button>
        </div>
      </div>
    </>
  );
}
