import React, { createContext, useState } from "react";

export let GlobalApi = createContext();
const Context = ({ children }) => {
  let [state, setState] = useState({
    ename: "hello",
    password: 1245,
  });
  return (
    <div>
      <GlobalApi.Provider value={state}>{children}</GlobalApi.Provider>
    </div>
  );
};

export default Context;
