import { SiteHeader } from "@/components/layout/site-header";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#ede9fe_0%,#f6f7f9_30%,#f6f7f9_100%)]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">Projects</h1>
        <p className="mt-3 max-w-3xl text-justify leading-relaxed text-slate-700">
          Full-stack and DevOps-focused systems built for reliability, scale, and clear operational visibility.
        </p>
        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
      </main>
    </div>
  );
}
