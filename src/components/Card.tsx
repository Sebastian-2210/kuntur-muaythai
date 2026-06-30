import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "group rounded-2xl border border-white/10 bg-zinc-900/70 p-6 backdrop-blur-sm transition-all duration-300",
        "hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-xl hover:shadow-yellow-500/10",
        className
      )}
    >
      {children}
    </div>
  );
}