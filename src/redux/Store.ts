import { applyMiddleware, createStore, Store } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { StoreState } from "../contract/";
import { getSaga } from "./Saga";
import { reducers } from "./Reducers";

export const initStoreState: StoreState = {
  employee: {
    isLoading: false,
    employees: undefined,
  },
};

export const createAppStore = (): Store<StoreState> => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(getSaga());
  return store as Store<StoreState>;
};
