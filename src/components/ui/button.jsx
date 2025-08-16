import * as React from "react";
import { cn } from "../../lib/utils";

export function Button({ className, ...props }) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-xl bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-sm font-medium transition",
        className
      )}
      {...props}
    />
  );
}
