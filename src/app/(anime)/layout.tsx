import PageContainer from "@/components/common/PageContainer";
import Header from "@/components/page/header/Header";
import React, { ReactNode } from "react";

const AnimeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <PageContainer>
      <Header />
      {children}
    </PageContainer>
  );
};

export default AnimeLayout;
