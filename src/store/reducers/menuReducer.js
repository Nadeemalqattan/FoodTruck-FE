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
      console.log(action.payload);
      return {
        ...state,
        menu: filteredMenu,
      };
    case types.DELETE_MENU:
      console.log(action.payload);
      const index1 = state.menu.findIndex(
        (category) => category.id === action.payload.categoryID
      );
      console.log(index1);
      const newMenuStateDeleteItem = [...state.menu];
      newMenuStateDeleteItem[index1].FoodItems = newMenuStateDeleteItem[
        index1
      ].FoodItems.filter((item) => item.id !== action.payload.menuId);
      console.log(newMenuStateDeleteItem);
      return {
        ...state,
        menu: newMenuStateDeleteItem,
      };
    default:
      return state;
  }
};

export default menuReducer;
