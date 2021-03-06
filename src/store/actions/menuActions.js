import instance from "./instance";
import * as types from "../types";
import { toast } from "react-toastify";

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
    const formData = new FormData();

    for (const iterator in foodcategory) {
      formData.append(iterator, foodcategory[iterator]);
    }

    const res = await instance.post(
      `foodtruck/menu/${categoryID}/add`,
      formData
    );
    dispatch({
      type: types.ADD_ITEM,
      payload: res.data,
    });
    toast.success("Item added successfully");
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

/*-------Update Menu-------*/
export const updateMenu = (categoryID, menuId, updateMenu) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const iterator in updateMenu) {
        formData.append(iterator, updateMenu[iterator]);
      }
      const res = await instance.put(
        `foodtruck/menu/${categoryID}/edit/${menuId}`,
        formData
      );
      console.log(res.data);
      dispatch({
        type: "UPDATE_MENU",
        payload: res.data,
      });
      toast.success("Item updated successfully");
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
    toast.error("Item deleted successfully");
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
    toast.success("Category added successfully");
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
    toast.error("Category deleted successfully");
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
    toast.success("Category edited successfully");
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
