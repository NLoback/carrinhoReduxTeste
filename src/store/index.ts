import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { ICartState } from "./modules/types";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";


export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]


export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
);

sagaMiddleware.run(rootSaga)

