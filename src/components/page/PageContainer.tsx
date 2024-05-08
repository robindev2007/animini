import React, { ReactNode } from "react";

const PageContainer = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-3xl px-3 mx-auto">{children}</div>;
};

export default PageContainer;
