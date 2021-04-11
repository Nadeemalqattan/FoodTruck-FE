import instance from "./instance";
import * as types from "../types";

/*-------Fetch Menu-------*/
// export const fetchMenu = () => async (dispatch) => {
//   try {
//     const res = await instance.get("");
//     console.log(res.data);
//     dispatch({
//       type: types.FETCH_MENU,
//       payload: res.data,
//     });
//   } catch (error) {
//     console.log("ERROR: ", error);
//   }
// };

/*-------Add Menu-------*/
// export const addMenu = (newMenu) => async (dispatch) => {
//   try {
//     const formData = new FormData();
//     for (const key in newMenu) formData.append(key, newMenu[key]);
//     const res = await instance.post("", formData);
//     console.log(res.data);
//     dispatch({
//       type: types.ADD_MENU,
//       payload: { newMenu: res.data },
//     });
//   } catch (error) {
//     console.log("ERROR: ", error);
//   }
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

/*-------Update Menu-------*/
// export const updateMenu = (updateMenu) => async (dispatch) => {
//   try {
//     const formData = new FormData();
//     for (const key in updateMenu) formData.append(key, updateMenu[key]);
//     const res = await instance.put("", formData);
//     console.log(res.data);
//     dispatch({
//       type: types.UPDATE_MENU,
//       payload: { updateMenu: res.data },
//     });
//   } catch (error) {
//     console.log("ERROR: ", error);
//   }
// };
