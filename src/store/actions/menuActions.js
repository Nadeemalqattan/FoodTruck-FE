import instance from "./instance";
import * as types from "../types";

/*-------Fetch Menu-------*/
export const fetchMenu = () => async (dispatch) => {
  try {
    const res = await instance.get("foodtruck/menu/");
    console.log(res.data);
    dispatch({
      type: types.FETCH_MENU,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

/*-------Add Menu-------*/
export const addMenu = (foodcategory) => async (dispatch) => {
  try {
    console.log(foodcategory);
    const res = await instance.post(`foodtruck/menu/${foodcategory.id}/add`);
    dispatch({
      type: types.ADD_MENU,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

/*-------Update Menu-------*/
// export const updateMenu = (updateMenu) => {
//   return async (dispatch) => {
//     try {
//       const res = await instance.put(`/foodtruck/${updateMenu.id}`, updateMenu);
//       dispatch({
//         type: types.UPDATE_MENU,
//         payload: res.data,
//       });
//     } catch (error) {
//       console.log("error:", error);
//     }
//   };
// };

/*-------Delete Menu-------*/
// export const deleteMenu = (menuId) => async (dispatch) => {
//   try {
//     const res = await instance.delete("");
//     console.log(res.data);
//     dispatch({
//       type: types.DELETE_MENU,
//       payload: { menuId },
//     });
//   } catch (error) {
//     console.log("ERROR: ", error);
//   }
// };

/*-------Add Category-------*/
export const addCategory = (category) => async (dispatch) => {
  try {
    const res = await instance.post("foodtruck/menu/add", category);
    console.log(res.data);
    dispatch({
      type: types.ADD_CATEGORY,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
