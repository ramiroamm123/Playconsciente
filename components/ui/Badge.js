import { cn } from "@/lib/utils";

export default function Badge({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-deep/20 bg-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-deep/70",
        className
      )}
    >
      {children}
    </span>
  );
}
