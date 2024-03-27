import React from "react";
import { checkType } from "../utils/checkType";

const TypeBox = ({ type }) => {
  const color = checkType(type.type);
  const classes = `bg-${color}-500 inline-block ml-4 rounded-xl w-14 h-10 `;
  return <li className={classes}>{type.type}</li>;
};

export default TypeBox;
