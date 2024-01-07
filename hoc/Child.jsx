import React from "react";
import Hoc from "./Hoc";

const Child = ({ value }) => {
  console.log(value);
  return <div>{value}</div>;
};

export default Hoc(Child);
