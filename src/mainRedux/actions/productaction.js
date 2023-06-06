import { ActionTypes } from "../constants/action-type";
import { temp } from "../../containers/ProductComponent";
import axios from "axios";
import fakeStoreApi from "../../apis/fakeStoreApi";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
export const FetchProducts = () => {
  const {userId}=useParams();
  const [loading, setLoading] = useState(false);
  return async(dispatch)=>{
    const response = await fakeStoreApi.get('/products');
    dispatch({type:ActionTypes.FETCH_PRODUCTS, payload: response.data})
  };
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeselectedProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const cartProducts = (temp) => {
 // console.log("action",temp)
  return {
    type: "ADD_TO_CART",
    choosenData:temp,
  };
};

export const removeItem = (data) => {
  //console.log("action",temp)
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload:data,
  };
};

/*
  
  export const cartProducts = (data) => {
    return {
      type:"ADD_TO_CART",
      data:data,
    };
  };
  const mapStateToProps=state=>({
    data: state.addReducer,
    // data:state.cardItems
})
const mapDispatchToProps=(dispatch)=>({
  addToCart:data=>dispatch(cartProducts(data)),
})
export default connect(mapStateToProps,mapDispatchToProps)(ProcductComponent)*/
