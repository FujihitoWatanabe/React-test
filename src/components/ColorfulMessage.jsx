import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contenstStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contenstStyle}>{children}</p>;
};
