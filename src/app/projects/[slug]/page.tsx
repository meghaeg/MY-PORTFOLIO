import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { Tag } from "@/components/ui/tag";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/projects";
import { ScreenshotsCarousel } from "@/components/projects/screenshots-carousel";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#ffedd5_0%,#f6f7f9_30%,#f6f7f9_100%)]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <Card className="p-6">
              <h1 className="text-2xl font-bold text-slate-900">{project.name}</h1>
              <p className="mt-4 text-justify text-sm leading-relaxed text-slate-700">{project.description}</p>
              <dl className="mt-5 space-y-2 text-sm">
                <div><dt className="font-semibold text-slate-900">Role</dt><dd className="text-slate-700">{project.role}</dd></div>
                <div><dt className="font-semibold text-slate-900">Duration</dt><dd className="text-slate-700">{project.duration}</dd></div>
              </dl>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Tag key={tech} label={tech} />
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <Link href={project.github ?? "#"} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
                  GitHub
                </Link>
                <Link href={project.live ?? "#"} className="rounded-xl border border-[#dcdcdc] bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50">
                  Live
                </Link>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-white to-indigo-50/40 p-6">
              <h2 className="text-lg font-semibold text-slate-900">Problem</h2>
              <p className="mt-2 text-justify text-sm leading-relaxed text-slate-700">{project.problem}</p>
              <h2 className="mt-4 text-lg font-semibold text-slate-900">Solution</h2>
              <p className="mt-2 text-justify text-sm leading-relaxed text-slate-700">{project.solution}</p>
            </Card>
          </div>

          <div className="space-y-6 lg:col-span-3">
            <Card className="overflow-hidden">
              <div className="flex h-64 w-full items-center justify-center bg-slate-100 p-3 sm:h-96">
                <img src={project.image} alt={project.name} className="h-full w-full object-contain" />
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-white to-violet-50/40 p-6">
              <h2 className="text-lg font-semibold text-slate-900">Screenshots</h2>
              <div className="mt-4">
                <ScreenshotsCarousel images={project.screenshots} />
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
