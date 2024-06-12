import { cn } from "@/lib/utils";
import React, {
  ComponentPropsWithoutRef,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
} from "react";

type props = ComponentPropsWithoutRef<"h2"> & {
  children: ReactNode;
};

const H2 = ({ children, className, ...props }: props) => {
  return (
    <h2 className={cn("text-xl font-semibold", className)} {...props}>
      {children}
    </h2>
  );
};

export default H2;
