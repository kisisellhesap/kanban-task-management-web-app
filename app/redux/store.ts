import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/clientState-UI/modalSlice";
import sidebarReducer from "./slices/clientState-UI/sidebarSlice";

export const store = () => {
  return configureStore({
    reducer: {
      modalReducer,
      sidebarReducer,
    },
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
