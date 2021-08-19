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
        PotlucksReducer: [...state.PotlucksReducer, { ...action.payload }],
      };
    case ActionTypes.ADD_ESSENTIALS:
      console.log("reducing...", action.payload.essentials)
      return {
        ...state,
        EssentialsReducer: [{ ...action.payload }],
      };
    default:
      return state;
  }
}

export default ActionReducers;
