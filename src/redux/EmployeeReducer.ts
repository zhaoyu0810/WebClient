import { AnyAction } from "redux";
import { EmployeeState } from "../contract/StoreState";
import { LIST_EMPLOYEE_START, LIST_EMPLOYEE_SUCCESS } from "./Actions";
import { initStoreState } from "./Store";

export const employeeReducer = (
  state: EmployeeState = initStoreState.employee,
  action: AnyAction
): EmployeeState => {
  console.log(action);

  switch (action.type) {
    case LIST_EMPLOYEE_START:
      return { ...state, isLoading: true };

    case LIST_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...{ queryResult: action.payload.data },
      };

    default:
      break;
  }

  return state;
};
