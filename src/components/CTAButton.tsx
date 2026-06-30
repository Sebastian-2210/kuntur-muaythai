import Link from "next/link";
import clsx from "clsx";

interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function CTAButton({
  children,
  href,
  variant = "primary",
  className,
}: CTAButtonProps) {
  const variants = {
    primary:
      "bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg hover:shadow-yellow-400/30",

    secondary:
      "bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-red-500/30",

    outline:
      "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:scale-105",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}