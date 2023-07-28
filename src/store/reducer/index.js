import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import storage from "redux-persist/lib/storage";
// reducers
import githubReducer from "../slices/index";

const createRootReducer = (history) => {
  const appReducer = combineReducers({
    router: connectRouter(history),
    githubReducer,
  });

  const rootReducer = (state, action) => {
    if (action.type === "404") {
      storage.removeItem("persist:root");
      state = undefined;
    }
    return appReducer(state, action);
  };

  return rootReducer;
};

export default createRootReducer;
