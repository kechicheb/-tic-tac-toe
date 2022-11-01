import Board from "./components/board";
import Start from "./components/start";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/modal";
import { checkNoWinner, cpuNextCpu } from "./rtk/slices/Game";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const Game = useSelector((state) => state.Game);
  const { playMode, screen, activeUser, winner, xnext, squares } = Game;

  useEffect(() => {
    let currentUser = xnext ? "o" : "x";
    if (playMode === "cpu" && currentUser !== activeUser && !winner) {
      dispatch(cpuNextCpu(squares));
    }
    dispatch(checkNoWinner());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xnext, screen, winner]);
  return (
    <>
      <div className="App">
        <div className="container">
          {screen === "start" ? <Start /> : <Board />}
        </div>
        <Modal />
      </div>
    </>
  );
}

export default App;
