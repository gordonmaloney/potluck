import * as ActionTypes from "./ActionTypes";
import PotlucksReducer from "./PotlucksReducer";
import EssentialsReducer from "./EssentialsReducer";

function ActionReducers(
  state = {
    PotlucksReducer,
    EssentialsReducer,
  },
  action
) {
  switch (action.type) {
    case ActionTypes.ADD_POTLUCK:
      return {
        ...state,
        PotlucksReducer: [{ ...action.payload }, ...state.PotlucksReducer],
      };
    case ActionTypes.ADD_ESSENTIALS:
      return {
        ...state,
        EssentialsReducer: [{ ...action.payload }],
      };
    default:
      return state;
  }
}

export default ActionReducers;
