import * as types from "./Action.Type";

const initData = {
  data: [],
  isLoading: false,
  isError: false,
  color: ["twitter.500", "black", "white"],
};

export const AppReducer = (state = initData, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_REQUEST:
      return {
        ...state,
        isLooding: true,
      };
    case types.GET_SUCCESS:
      return {
        ...state,
        isLooding: false,
        data: payload,
      };
    case types.GET_FAILURE:
      return {
        ...state,
        isLooding: false,
        isError: true,
      };
    case "Change To Dark":
      return {
        ...state,
        color: ["twitter.800", "white", "black"],
      };
    case "Change To Light":
      return {
        ...state,
        color: ["twitter.500", "black", "white"],
      };
    default:
      return state;
  }
};
