import instance from "./instance";

export const fetchWorkingHours = () => async (dispatch) => {
  try {
    const res = await instance.get("foodtruck/workinghours/");
    dispatch({
      type: "FETCH_WORKING_HOURS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
