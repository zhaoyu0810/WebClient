import { Employee } from "./Employee";

export interface EmployeeState {
  isLoading: boolean;
  employees: Employee[] | undefined;
}

export interface StoreState {
  employee: EmployeeState;
}
