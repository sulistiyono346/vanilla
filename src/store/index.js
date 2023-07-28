import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import rootReducer from "./reducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["signin"],
  stateReconciler: autoMergeLevel2,
};

const history = createBrowserHistory();
const persistedReducer = persistReducer(persistConfig, rootReducer(history));
const middlewares = [routerMiddleware(history)];

if (process.env.REACT_APP_NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(...middlewares),
  devTools: false,
});

const persistor = persistStore(store);

export { history, store, persistor };
