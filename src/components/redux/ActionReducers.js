import * as ActionTypes from "./ActionTypes";
import PotlucksReducer from "./PotlucksReducer";
import EssentialsReducer from "./EssentialsReducer";

function ActionReducers(
  state = {
    PotlucksReducer
  },
  action
) {
  switch (action.type) {
    case ActionTypes.ADD_POTLUCK:
      return {
        ...state,
        PotlucksReducer: [...state.PotlucksReducer, { ...action.payload }],
      };
    case ActionTypes.ADD_ESSENTIALS:
      return {
        ...state,
        essentials: [...state.essentials, { ...action.payload }],
      };
    default:
      return state;
  }
}

export default ActionReducers;
