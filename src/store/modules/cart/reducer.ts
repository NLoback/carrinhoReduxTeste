import { Reducer } from "redux"
import { ICartState } from "../types"
import produce from "immer";

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
};

export const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART_SUCCESS': {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(item =>
          item.product.id == product.id,
        );
        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          //immer usado para evitar a repetição do spread ... usando draft como função para atualização do estado do carrinho 
          draft.items.push({
            product,
            quantity: 1,
          });
        }
        break;
      }
      case 'ADD_PRODUCT_TO_CART_FAILURE': {
        draft.failedStockCheck.push(action.payload.productId);
        break;
      }
      default: {
        return draft;
      }
    }
  })
}


