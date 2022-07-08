export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";

export const GET_NUMBER_CART = "GET_NUMBER_CART";
export const ADD_CART = "ADD_CART";
export const UPDATE_CART = "UPDATE_CART";
export const DELETE_CART = "DELETE_CART";
export const CLEAR_CART = "CLEAR_CART"

export const FETCH_REQUEST = "FETCH_REQUEST"
export const FETCH_ERROR = "FETCH_ERROR"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
/*FETCH DATA*/
function fetchPostsRequest(){
    return {
      type: "FETCH_REQUEST"
    }
  }
  
  function fetchPostsSuccess(payload) {
    return {
      type: "FETCH_SUCCESS",
      payload
    }
  }
  
  function fetchPostsError() {
    return {
      type: "FETCH_ERROR"
    }
  }
  
/*CART*/
export function GetNumberCart() {
    return {
        type: "GET_NUMBER_CART"
    };
}

export function AddCart(payload) {
    return {
        type: "ADD_CART",
        payload
    };
}
export function UpdateCart(payload) {
    return {
        type: "UPDATE_CART",
        payload
    };
}
export function DeleteCart(payload) {
    return {
        type: "DELETE_CART",
        payload
    };
}

export function IncreaseQuantity(payload) {
    return {
        type: "INCREASE_QUANTITY",
        payload
    };
}
export function DecreaseQuantity(payload) {
    return {
        type: "DECREASE_QUANTITY",
        payload
    };
}
export function ClearCart(){
    return {
        type: "CLEAR_CART",
    };
}
export class GET_ALL_PRODUCT {
}