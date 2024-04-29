"use client";

import { Checkbox } from "./checkbox";
export function CheckboxLable({
  lable,
  onCheckedChange,
  value,
}: {
  lable: string;
  onCheckedChange?: (checked: boolean) => void;
  value?: boolean;
}) {
  return (
    <div className="flex items-center space-x-0">
      <Checkbox
        id={lable}
        className="scale-75 opacity-60"
        checked={value}
        onCheckedChange={(chacked) =>
          onCheckedChange && onCheckedChange(Boolean(chacked))
        }
      />
      <label
        htmlFor={lable}
        className="text-xs text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
        {lable}
      </label>
    </div>
  );
}
