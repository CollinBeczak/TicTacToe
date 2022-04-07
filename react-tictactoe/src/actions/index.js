import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
  console.log("thoashdofhoas");
  const res = await axios.get("/api/current_user");
  console.log("thoashdofhoasdsfsddfss");
  dispatch({ type: FETCH_USER, payload: res.data });
};
