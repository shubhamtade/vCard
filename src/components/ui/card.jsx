import * as React from "react";
import { cn } from "../../lib/utils";

export function Card({ className, ...props }) {
  return <div className={cn("rounded-2xl bg-white/5 p-4", className)} {...props} />;
}
export function CardHeader({ className, ...props }) {
  return <div className={cn("mb-2", className)} {...props} />;
}
export function CardTitle({ className, ...props }) {
  return <h3 className={cn("text-lg font-semibold", className)} {...props} />;
}
export function CardContent({ className, ...props }) {
  return <div className={cn("text-sm text-slate-300", className)} {...props} />;
}
