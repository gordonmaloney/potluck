import { combineReducers } from "redux";
import PotlucksReducer from "./PotlucksReducer";
import EssentialsReducer from "./EssentialsReducer";
import ActionReducers from "./ActionReducers";

const allReducers = combineReducers({
    ActionsReduced: ActionReducers, 
    potlucks: PotlucksReducer,
    essentials: EssentialsReducer
});
 
export default allReducers