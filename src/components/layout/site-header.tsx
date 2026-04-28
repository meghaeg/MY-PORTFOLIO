import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#dcdcdc] bg-[#f6f7f9]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-sm font-semibold text-slate-900 sm:text-base">
          Megha E G 
        </Link>
        <nav className="flex items-center gap-2 sm:gap-3">
          <Link href="/#education" className="rounded-xl border border-[#dcdcdc] bg-white px-3 py-2 text-xs font-medium text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm sm:text-sm">
            Education
          </Link>
          <Link href="/#about" className="rounded-xl border border-[#dcdcdc] bg-white px-3 py-2 text-xs font-medium text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm sm:text-sm">
            About
          </Link>
          <Link href="/#contact" className="rounded-xl border border-[#dcdcdc] bg-white px-3 py-2 text-xs font-medium text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm sm:text-sm">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
