import { ActionTypes } from "../constants/action-type";
const initialState = {
  products: [],
  
};
const initialState1 = {
 productCount :[],
}
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
    return { ...state, products: payload };
    default:
      return state;
  }
};
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const addReducer = (state = initialState1, action) => {
  //console.log("addtoreducer",action.choosenData)
  switch (action.type) {
    case "ADD_TO_CART": {
       return{
        ...state,
        productCount: state.productCount.concat(action.choosenData)
       }
    }
    case ActionTypes.REMOVE_ITEM: {
      console.log(action.payload)
       return { ...state,
        productCount: state.productCount.filter((item)=> item.id !== action.payload)   
      };
      //return newArray
     }
    default:
      return state;
  }
};
/*
export const addReducer = (state = [],action) => {
  switch (action.type) {
      case "ADD_TO_DATA":  
      return [
        {products: action.products}
    ]
    default:
      return state;
  }
};*/
