import clsx from "clsx";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={clsx(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <span className="mb-3 inline-block rounded-full bg-yellow-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-yellow-500">
        Kuntur Muaythai
      </span>

      <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-3xl text-gray-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}