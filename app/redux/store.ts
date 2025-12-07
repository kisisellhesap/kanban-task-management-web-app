import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/clientState-UI/modalSlice";
import sidebarReducer from "./slices/clientState-UI/sidebarSlice";
import boardReducer from "./slices/serverState-FETCH/board/boardSlice";
import taskReducer from "./slices/serverState-FETCH/task/taskSlice";
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
  key: "root", // Depolama anahtarı
  storage, // Yerel depolama motoru (Local Storage)
  // Hangi reducer'ları kaydetmek istediğinizi belirtin
  whitelist: [""], // Sadece 'boards' slice'ını kaydet
  // blacklist: ['modal', 'sidebar'] // Bunları kaydetme
};

export const rootReducer = combineReducers({
  boardReducer,
  modalReducer,
  sidebarReducer,
  taskReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, // Persist edilmiş reducer'ı kullanın
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Redux Persist'in eylem tiplerini ignore et
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
