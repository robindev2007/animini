"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-screen-2xl w-full mx-auto px-[2px] sm:px-1 md:px-2",
        className
      )}>
      {children}
    </div>
  );
};

export default Container;
