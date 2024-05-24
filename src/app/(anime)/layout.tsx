import PageContainer from "@/components/common/PageContainer";
import Header from "@/components/page/header/Header";
import React, { ReactNode } from "react";

const AnimeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
};

export default AnimeLayout;
