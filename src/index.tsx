import React, { memo } from "react";
import ReactDOM from "react-dom";

const Platform = memo(() => {
  return <h1>Hello 2</h1>;
});

Platform.displayName = "Platform";

ReactDOM.render(<Platform />, document.getElementById("root"));
