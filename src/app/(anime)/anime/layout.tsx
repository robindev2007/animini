import React, { ReactNode } from "react";

const AnimeLayout = ({
  topairing,
  children,
}: {
  topairing: ReactNode;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col">
      {topairing}
      {/* {children} */}
    </div>
  );
};

export default AnimeLayout;
