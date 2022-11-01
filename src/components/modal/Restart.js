const Restart = () => {
  return (
    <div className="restart" style={{padding:"15px 0"}}>
      <h3 className="restart_title">Restart Game?</h3>
      <div className="restart_btns">
        <button className="btn btn-sm">no, cancal</button>
        <button className="btn btn-yellow btn-sm">yes, restart</button>
      </div>
    </div>
  );
};
export default Restart;
