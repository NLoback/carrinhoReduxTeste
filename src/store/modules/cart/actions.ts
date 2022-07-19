import { IProduct } from "../types";

export function addProductToCartRequest(product: IProduct) {
  return {
    //propriedade obrigatoria mais descritiva o possivel 
    type: 'ADD_PRODUCT_TO_CART_REQUEST',
    //payload e qualquer informacao que precisa para add o objeto ao carrinho
    payload: {
      product,
    }
  }
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    //propriedade obrigatoria mais descritiva o possivel 
    type: 'ADD_PRODUCT_TO_CART_SUCCESS',
    //payload e qualquer informacao que precisa para add o objeto ao carrinho
    payload: {
      product,
    }
  }
}

export function addProductToCartFailure(productId: number) {
  return {
    //propriedade obrigatoria mais descritiva o possivel 
    type: 'ADD_PRODUCT_TO_CART_FAILURE',
    //payload e qualquer informacao que precisa para add o objeto ao carrinho
    payload: {
      productId,
    }
  }
}