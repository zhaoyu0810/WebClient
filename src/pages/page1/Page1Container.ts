import { connect } from "react-redux";
import { DispatchProps, Page1, StateProps } from "./Page1";
import { withRouter } from "react-router";
import { Dispatch } from "@reduxjs/toolkit";
import { StoreState } from "../../contract/";
import { listEmployeeStartAction } from "redux/Actions";

const mapState = (props: StoreState): StateProps => {
  console.log(props);
  const { employee } = props;
  return {
    isLoading: employee.isLoading,
    employees: employee.employees,
  };
};

const mapDispatch = (dispatch: Dispatch): DispatchProps => {
  return {
    onLoad: () => {
      dispatch(listEmployeeStartAction());
    },
  };
};

export const Page1Container = withRouter(connect(mapState, mapDispatch)(Page1));
