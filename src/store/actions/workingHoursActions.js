import instance from "./instance";
import { toast } from "react-toastify";

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
export const editWorkingHours = (workingHourID, stateHours) => async (
  dispatch
) => {
  try {
    if (stateHours.openTime === null) {
      stateHours = {
        closeTime: stateHours.closeTime,
      };
    } else if (stateHours.closeTime === null) {
      stateHours = {
        openTime: stateHours.openTime,
      };
    }
    const res = await instance.put(
      `foodtruck/workinghours/${workingHourID}`,
      stateHours
    );
    dispatch({
      type: "EDIT_WORKING_HOURS",
      payload: res.data,
    });
    toast.success("Time edited successfully");
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
