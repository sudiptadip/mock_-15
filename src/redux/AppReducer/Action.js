import axios from "axios";
import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./Action.Type";

export const GetData = (filter = '') => (dispatch) => {
  dispatch({ type: GET_REQUEST });
  return axios
    .get(`https://new-mock-api-2.onrender.com/blogs${filter}`)
    .then((res) => {
      dispatch({ type: GET_SUCCESS, payload: res.data });
      // console.log(res)
    })
    .catch((err) => {
      dispatch({ type: GET_FAILURE });
      console.log(err)
    });
};
