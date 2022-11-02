import { handleReset, hideModal } from "../../rtk/slices/Game";
import { useDispatch } from "react-redux";
const Restart = () => {
  const dispatch = useDispatch();
  return (
    <div className="restart" style={{ padding: "15px 0" }}>
      <h3 className="restart_title">Restart Game?</h3>
      <div className="restart_btns">
        <button className="btn btn-sm" onClick={() => dispatch(hideModal())}>
          no, cancal
        </button>
        <button
          className="btn btn-yellow btn-sm"
          onClick={() => dispatch(handleReset())}
        >
          yes, restart
        </button>
      </div>
    </div>
  );
};
export default Restart;
