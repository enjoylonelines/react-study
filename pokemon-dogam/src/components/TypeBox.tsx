import React from "react";
import { checkType } from "../utils/checkType";

const TypeBox = ({ type }) => {
  const color = checkType(type);
  const classes = `bg-${color}-500 inline ml-4`;
  return <li className={classes}>{type}</li>;
};

export default TypeBox;
