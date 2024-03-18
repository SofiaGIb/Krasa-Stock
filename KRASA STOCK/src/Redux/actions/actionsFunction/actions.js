import {
  ADD_PRODUCT,
  SALE_PRODUCTS,
  ALL_PRODUCT,
  DELETE_PRODUCT,
  FOUND_PRODUCTS,
  ADD_SALE,NEW_AMOUNT
} from "../action-types";
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
      console.log(error.response);
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
export const saleProduct = (payload) => {
  return async function (dispatch) {
    try {
      
      const response = await axios.get(`http://localhost:3001/sale`, payload);
      const data = response.data;
      console.log(data);
      return dispatch({
        type: SALE_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      return error.response.data.error;
    }
  };
};

export const foundProduct = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/products/${name}`);
      const data = response.data;
      console.log(data);
      data.length === 0
        ? "producto no encontrado"
        : dispatch({
          type: FOUND_PRODUCTS,
          payload: data,
        });
      } catch (error) {
        console.log(error);
    }
  };
};

export const newStock = (payload) =>{
  return async (dispatch)=>{
    
    try {
      const response= await axios.patch(`  http://localhost:3001/products`,payload);
      const data = response.data;
      dispatch({
        type:NEW_AMOUNT,
        payload:data
      })
    } catch (error) {
      console.log({message :error.message });
    }
  }
}

export const addSale = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/sale", payload);
      const data = response.data;
      dispatch({
        type: ADD_SALE,
        payload: data,
      });
    } catch (error) {
      console.log(error.response.data.error);
    }
  };
};
