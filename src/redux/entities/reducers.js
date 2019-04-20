import { combineReducers } from "redux";

import games from "./games/reducers";
import runs from "./runs/reducers";

export default combineReducers({
    games,
    runs,
});