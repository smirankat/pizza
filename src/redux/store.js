import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import filters from "./reducers/filtersReducer";
import pizzas from "./reducers/pizzasReducer";
import cart from "./reducers/cartReducer";

const rootreducer = combineReducers({
  filters,
  pizzas,
  cart,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootreducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
