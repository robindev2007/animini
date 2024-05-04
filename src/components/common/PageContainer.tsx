import React, { ReactNode } from "react";

const PageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen max-w-6xl mx-auto px-2 dark">
      {children}
    </div>
  );
};

export default PageContainer;
