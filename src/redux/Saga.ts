import { all, put, takeEvery } from "redux-saga/effects";
import { listEmployeeSuccessAction, LIST_EMPLOYEE_START } from "./Actions";

export function* list() {
  yield put(listEmployeeSuccessAction([{ name: "name1" }]));
}

export default function* listEmployeeSaga() {
  yield takeEvery(LIST_EMPLOYEE_START, list);
}

export function getSaga() {
  return function* saga() {
    yield all([listEmployeeSaga]);
  };
}
