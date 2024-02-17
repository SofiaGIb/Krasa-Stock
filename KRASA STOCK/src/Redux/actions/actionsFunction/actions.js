import { ADD_PRODUCT, SOLD_PRODUCTS, ALL_PRODUCT, DELETE_PRODUCT, FOUND_PRODUCTS } from "../action-types";
import axios from "axios";

export const allProduct = () => {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/products");
      const data = json.data;
      return dispatch({
        type: ALL_PRODUCT,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };
};
export const postProduct = (payload) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/products", payload);
      return dispatch({
        type: ADD_PRODUCT,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const deletProduct = (name) => {
  return async function (dispatch) {
    try {
      const removed = await axios.delete(`http://localhost:3001/products/${name}`);
      return dispatch({
        type: DELETE_PRODUCT,
        payload: removed.data,
      })
        ? alert("producto eliminado")
        : removed;
    } catch (error) {
      return alert(error.removed.data.error);
    }
  };
};
export const soldProduct = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/sale`);
      const data = response.data
      return dispatch({
        type: SOLD_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      return (error.response.data.error);
    }
  };
};

export const foundProduct = (name)=>{
  return async function (dispatch) {
    
   
      await axios.get(`http://localhost:3001/products/${name}`)
      .then((response) => response.data)
      .then((data) => {
        data.length === 0
          ? alert("Pokemon does not exist")
          : dispatch({
              type: FOUND_PRODUCTS,
              payload: data,
            });
   
    } )
    .catch ((error)=> error.response) 
    
    
  }}
