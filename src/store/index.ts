import { createStore } from "redux";

import rootReducer from "./modules/rootReducer";
import { ICartState } from "./modules/cart/types";
import { composeWithDevTools } from "redux-devtools-extension";

export interface IState {
  cart: ICartState;
}

const store = createStore(rootReducer, composeWithDevTools());

export default store;
