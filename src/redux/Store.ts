import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { StoreState } from "../contract/";
import { getSaga } from "./Saga";
import { employeeReducer } from "./EmployeeReducer";

export const initStoreState: StoreState = {
  employee: {
    isLoading: false,
    employees: undefined,
  },
};

export const createAppStore = (): Store<StoreState> => {
  const reducer = combineReducers(employeeReducer);

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(getSaga());

  return store as Store<StoreState>;
};
