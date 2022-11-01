import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./slices/Game";
const store = configureStore({
  reducer: {
    Game:gameSlice,
  
  },
});
export default store;
