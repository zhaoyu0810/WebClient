import { Employee } from "../contract/Employee";

export const LIST_EMPLOYEE_START = "LIST_EMPLOYEE_START";
export const LIST_EMPLOYEE_SUCCESS = "LIST_EMPLOYEE_SUCCESS";

export const listEmployeeStartAction = () => {
  return {
    type: LIST_EMPLOYEE_START,
  };
};

export const listEmployeeSuccessAction = (data: Employee[]) => {
  return {
    type: LIST_EMPLOYEE_SUCCESS,
    payload: { data },
  };
};
