type TagProps = {
  label: string;
};

export function Tag({ label }: TagProps) {
  return (
    <span className="rounded-full border border-[#dcdcdc] bg-gradient-to-r from-white to-slate-50 px-3 py-1 text-xs font-medium text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-900">
      {label}
    </span>
  );
}
