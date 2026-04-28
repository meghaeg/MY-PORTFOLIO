import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-800"
      : "bg-white text-slate-800 border border-[#dcdcdc] hover:bg-slate-50";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md ${styles}`}
    >
      {children}
    </Link>
  );
}
