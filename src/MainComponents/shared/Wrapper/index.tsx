import React, { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className=" mx-auto p-2 md:px-1">{children}</div>;
};

export default Wrapper;
