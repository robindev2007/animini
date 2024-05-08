import PageContainer from "@/components/common/PageContainer";
import React, { ReactNode } from "react";

const AnimeLayout = ({ children }: { children: ReactNode }) => {
  return <PageContainer>{children}</PageContainer>;
};

export default AnimeLayout;
