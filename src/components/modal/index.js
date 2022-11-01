import Restart from "./Restart";
import Win from "./Win";
import { useSelector } from "react-redux";
const Modal = () => {
  const Game = useSelector((state) => state.Game);
  const { show, mode } = Game;

  return (
    <>
      {" "}
      {show && (
        <div className="modal">
          <div className="modal_content">
            <div className="container">
              {mode === "winner" &&  <Win/>}
              {mode === "start" && <Restart />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
