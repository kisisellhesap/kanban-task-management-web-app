import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/taskSlice";
import boardReducer from "./slices/boardSlice";
import modalReducer from "./slices/modalSlice";
import sidebarReducer from "./slices/sidebarSlice";
import boardFormReducer from "./slices/boardFormSlice";
import taskFormReducer from "./slices/taskFormSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["modalReducer", "boardReducer", "taskReducer", "boardFormReducer", "taskFormReducer"],
};

export const rootReducer = combineReducers({
  boardReducer,
  modalReducer,
  sidebarReducer,
  taskReducer,
  boardFormReducer,
  taskFormReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
