import { combineReducers } from "redux";

import games from "./games/reducers";
import runs from "./runs/reducers";
import players from "./players/reducers";

export default combineReducers({
    games,
    runs,
    players,
});