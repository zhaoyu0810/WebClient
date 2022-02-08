import { Employee } from "contract";
import React from "react";

export type StateProps = {
  isLoading: boolean;
  employees?: Employee[];
};

export type DispatchProps = {
  onLoad: () => void;
};

export const Page1 = ({ onLoad }: StateProps & DispatchProps) => {
  React.useEffect(() => {
    onLoad();
  }, [onLoad]);

  return (
    <>
      <h1>Page1</h1>
    </>
  );
};
