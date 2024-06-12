import { cn } from "@/lib/utils";
import React, {
  ComponentPropsWithoutRef,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
} from "react";

type props = ComponentPropsWithoutRef<"h1"> & {
  children: ReactNode;
};

const H1 = ({ children, className, ...props }: props) => {
  return (
    <h1 className={cn("text-2xl font-bold", className)} {...props}>
      {children}
    </h1>
  );
};

export default H1;
