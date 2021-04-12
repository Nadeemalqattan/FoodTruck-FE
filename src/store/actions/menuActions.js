import instance from "./instance";
import * as types from "../types";

/*-------Fetch Menu-------*/
export const fetchMenu = () => async (dispatch) => {
  try {
    const res = await instance.get("foodtruck/menu/");
    console.log("fetched menu");
    dispatch({
      type: types.FETCH_MENU,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

/*-------Add Menu-------*/
export const addMenu = (foodcategory, categoryID) => async (dispatch) => {
  try {
    const res = await instance.post(
      `foodtruck/menu/${categoryID}/add`,
      foodcategory
    );
    dispatch({
      type: types.ADD_ITEM,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

/*-------Update Menu-------*/
export const updateMenu = (categoryID, menuId, updateMenu) => {
  return async (dispatch) => {
    try {
      const res = await instance.put(
        `foodtruck/menu/${categoryID}/edit/${menuId}`,
        updateMenu
      );
      dispatch({
        type: "UPDATE_MENU",
        payload: { updateMenu: res.data },
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};

/*-------Delete Menu-------*/
export const deleteMenu = (categoryID, menuId) => async (dispatch) => {
  try {
    const res = await instance.delete(
      `foodtruck/menu/${categoryID}/delete/${menuId}`
    );
    dispatch({
      type: types.DELETE_MENU,
      payload: { categoryID, menuId },
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

/*-------Add Category-------*/
export const addCategory = (category) => async (dispatch) => {
  try {
    const res = await instance.post("foodtruck/menu/add", category);
    dispatch({
      type: types.ADD_CATEGORY,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

/*-------Remove Category-------*/
export const removeCategory = (categoryID) => async (dispatch) => {
  try {
    const res = await instance.delete(`foodtruck/menu/${categoryID}`);
    dispatch({
      type: "DELETE_CATEGORY",
      payload: categoryID,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

/*-------Edit Category-------*/
export const editCategory = (categoryID) => async (dispatch) => {
  try {
    const res = await instance.put(`foodtruck/menu/${categoryID}`);
    dispatch({
      type: "DELETE_CATEGORY",
      payload: categoryID,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
