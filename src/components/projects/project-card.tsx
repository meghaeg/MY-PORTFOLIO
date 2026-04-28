import Link from "next/link";
import { Project } from "@/lib/projects";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden">
      <div className="flex h-44 w-full items-center justify-center bg-slate-100 p-2">
        <img src={project.image} alt={project.name} className="h-full w-full object-contain" />
      </div>
      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
          <p className="mt-2 text-justify text-sm leading-relaxed text-slate-700">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Tag key={tech} label={tech} />
          ))}
        </div>
        <Link href={`/projects/${project.slug}`} className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
          View Details
        </Link>
      </div>
    </Card>
  );
}
