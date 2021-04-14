import { AccessTimeOutlined } from "@material-ui/icons";
import * as types from "../types";

const initialState = {
  menu: [],
  category: [],
  loading: true,
  isDataLoaded: false,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CATEGORY:
      const foodCategory = {
        id: action.payload.id,
        name: action.payload.name,
        FoodItems: [],
      };
      return {
        ...state,
        menu: [...state.menu, foodCategory],
      };
    case types.FETCH_MENU:
      return {
        ...state,
        menu: action.payload,
        isDataLoaded: true,
      };
    case types.ADD_ITEM:
      const index = state.menu.findIndex(
        (category) => category.id === action.payload.FoodCategoryId
      );
      const foodItem = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        image: action.payload.image,
        description: action.payload.description,
      };
      const newMenuState = [...state.menu];
      newMenuState[index].FoodItems.push(foodItem);
      return {
        ...state,
        menu: newMenuState,
      };

    case "DELETE_CATEGORY":
      const filteredMenu = state.menu.filter(
        (menu) => menu.id !== action.payload
      );
      return {
        ...state,
        menu: filteredMenu,
      };
    case types.DELETE_MENU:
      const index1 = state.menu.findIndex(
        (category) => category.id === action.payload.categoryID
      );
      const newMenuStateDeleteItem = [...state.menu];
      newMenuStateDeleteItem[index1].FoodItems = newMenuStateDeleteItem[
        index1
      ].FoodItems.filter((item) => item.id !== action.payload.menuId);
      return {
        ...state,
        menu: newMenuStateDeleteItem,
      };

    case "UPDATE_MENU":
      // const index2 = state.menu.findIndex(
      //   (category) => category.id === action.payload.FoodCategoryId
      // );
      // const index3 = state.menu[index2].FoodItems.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      // const foodItemUpdated = {
      //   id: action.payload.id,
      //   name: action.payload.name,
      //   price: action.payload.price,
      //   image: action.payload.image,
      //   description: action.payload.description,
      // };
      // console.log(foodItemUpdated);
      // const newUpdaedState = [...state.menu];
      // newUpdaedState[index2].FoodItems[index3] = foodItemUpdated;
      // console.log(newUpdaedState);
      // return {
      //   ...state,
      //   menu: newUpdaedState,
      // };

      return {
        ...state,
        menu: action.payload.updateMenu,
      };

    default:
      return state;
  }
};

export default menuReducer;
