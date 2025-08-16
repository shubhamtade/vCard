import * as React from "react";
import { cn } from "../../lib/utils";

export function Badge({ className, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-white/10 text-slate-100",
        className
      )}
      {...props}
    />
  );
}
