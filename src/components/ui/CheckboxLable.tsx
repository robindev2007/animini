"use client";

import { Checkbox } from "./checkbox";
export function CheckboxLable({
  lable,
  onCheckedChange,
}: {
  lable: string;
  onCheckedChange?: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-center space-x-0">
      <Checkbox
        id={lable}
        className="scale-75 opacity-60"
        onChange={onCheckedChange && onCheckedChange}
      />
      <label
        htmlFor={lable}
        className="text-xs text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
        {lable}
      </label>
    </div>
  );
}
