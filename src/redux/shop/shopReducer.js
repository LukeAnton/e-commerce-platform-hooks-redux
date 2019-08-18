import SHOP_DATA from "./shopData";

import ShopActionTypes from "./shopTypes";
const { UPDATE_COLLECTIONS } = ShopActionTypes;

const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };

    default:
      return state;
  }
};
export default shopReducer;
