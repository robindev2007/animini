import NotFoundPage from "@/components/common/not-founnd-page";
import Header from "@/components/page/header/Header";
import React from "react";

const Notfound = () => {
  return (
    <div className="min-h-screen h-full flex flex-col">
      <Header />
      <NotFoundPage />
    </div>
  );
};

export default Notfound;
