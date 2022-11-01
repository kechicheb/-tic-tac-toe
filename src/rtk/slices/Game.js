import { createSlice } from "@reduxjs/toolkit";
import calcWinner, { calcBestMove } from "../../helpers/calcSquares";

export const gameSlice = createSlice({
  initialState: {
    show: false,
    mode: "winner",
    screen: "start",
    activeUser: "x",
    playMode: "user",
    squares: new Array(9).fill(""),
    xnext: false,
    winner: null,
    winnerLine: null,
    ties: { x: 0, o: 0 },
  },
  name: "Game",
  reducers: {
    showModal: (state) => {
      state.show = true;
    },
    hideModal: (state) => {
      state.show = false;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setActiveUser: (state, action) => {
      state.activeUser = action.payload;
    },

    changePlayMode: (state, action) => {
      state.playMode = action.payload;
      state.screen = "game";
    },
    handleSquareClick: (state, action) => {
      if (state.squares[action.payload] || state.winner) {
        return;
      }
      const currentUser = state.xnext ? "o" : "x";
      if (state.playMode === "cpu" && currentUser !== state.activeUser) {
        return;
      }
      let ns = [...state.squares];
      ns[action.payload] = !state.xnext ? "x" : "o";
      state.squares = ns;

      state.xnext = !state.xnext;
      // checkWinner
      const checkWinner = (ns) => {
        const isWinner = calcWinner(ns);
        if (isWinner) {
          state.winner = isWinner.winner;
          state.winnerLine = isWinner.line;
          const nties = { ...state.ties };
          nties[isWinner.winner] += 1;
          state.ties = nties;

          state.show = true;
          state.mode = "winner";
        }
      };
      checkWinner(ns);
    },

    handleReset: (state) => {
      state.squares = new Array(9).fill("");
      state.xnext = false;
      state.winner = null;
      state.winnerLine = null;
      state.activeUser = "x";
      state.ties = { x: 0, o: 0 };
      state.show = false;
      state.screen = "start";
    },
    handleNextRound: (state) => {
      state.squares = new Array(9).fill("");
      state.xnext = state.winner === "x" ? true : false;
      state.winner = null;
      state.winnerLine = null;
      state.show = false;
    },
    checkNoWinner: (state) => {
      const moves = state.squares.filter((sq) => sq === "");
      if (moves.length === 0) {
        state.winner = "no";
        state.show = true;
        state.mode = "winner";
      }
    },
    cpuNextCpu: (state, action) => {
      let bestmove = calcBestMove(
        action.payload,
        state.activeUser === "x" ? "o" : "x"
      );
      let ns = [...state.squares];
      ns[bestmove] = !state.xnext ? "x" : "o";
      state.squares = ns;
      state.xnext = !state.xnext;

      const checkWinner = (ns) => {
        const isWinner = calcWinner(ns);
        if (isWinner) {
          state.winner = isWinner.winner;
          state.winnerLine = isWinner.line;
          const nties = { ...state.ties };
          nties[isWinner.winner] += 1;
          state.ties = nties;
          state.show = true;
          state.mode = "winner";
        }
      };
      checkWinner(ns);
    },
  },
});

export const {
  showModal,
  hideModal,
  setMode,
  setActiveUser,
  changePlayMode,
  handleSquareClick,
  handleReset,
  handleNextRound,
  checkNoWinner,
  cpuNextCpu,
} = gameSlice.actions;
export default gameSlice.reducer;
