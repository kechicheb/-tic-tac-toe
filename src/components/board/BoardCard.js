import React from "react";
import Xicon from "../icons/Xicon";
import Oicon from "../icons/Oicon";
import { useDispatch } from "react-redux";
import { handleSquareClick } from "../../rtk/slices/Game";
const BoardCard = (props) => {
  const dispatch = useDispatch();
  const { active, user = "nouser", index } = props;
  return (
    <div
      className={`card ${active && user === "x" && "shadow-blue"} ${
        active && user === "o" && "shadow-yellow"
      } ${active ? "active" : "shadow-gray"}`}
      onClick={() => dispatch(handleSquareClick(index))}
    >
      {user === "o" && <Oicon color={active && "dark"} size="lg" />}
      {user === "x" && <Xicon color={active && "dark"} size="lg" />}
    </div>
  );
};
export default BoardCard;
