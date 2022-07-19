import { all } from "redux-saga/effects";

import cart from './cart/sagas'


//tipar retorno de uma função
export default function* rootSaga(): any {
  return yield all([
    cart,
  ])
}