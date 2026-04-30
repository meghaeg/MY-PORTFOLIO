import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { careerObjective, expertise, projects } from "@/lib/projects";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,#dbeafe_0%,#f6f7f9_38%,#f6f7f9_100%)]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl space-y-10 px-4 py-8 sm:px-6 sm:py-10">
        <section className="grid gap-6 lg:grid-cols-5">
          <Card className="group overflow-hidden lg:col-span-3">
            <div className="relative h-full">
              <div
                className="h-48 border-b border-[#dcdcdc] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/chatwallpaper.png')" }}
              >
                <div className="h-full w-full bg-gradient-to-r from-slate-900/50 via-slate-900/35 to-slate-900/50" />
              </div>
              <div className="space-y-6 bg-white p-6 sm:p-8">
                <img
                  src="/profile.jpeg"
                  alt="Profile"
                  className="-mt-16 h-20 w-20 rounded-full border-4 border-white object-cover shadow-md ring-1 ring-slate-200 transition duration-300 group-hover:scale-105 sm:h-24 sm:w-24"
                />
                <h1 className="text-4xl font-bold leading-[0.95] tracking-tight text-slate-950 sm:text-6xl">
                  MEGHA E G
                </h1>
                <p className="text-justify leading-relaxed text-slate-800">COMPUTER SCIENCE STUDENT | FULL-STACK DEVELOPER</p>
                                <div className="flex flex-wrap gap-3">
                  <Button href="/projects">PROJECTS</Button>
                  <Button href="/#contact" variant="secondary">
                    CONTACT
                  </Button>
                </div>
              </div>
            </div>
          </Card>
          <Card className="overflow-hidden bg-white lg:col-span-2">
            <div className="border-b border-[#dcdcdc] px-6 py-4">
              <h2 id="about" className="text-4xl font-semibold text-slate-800 sm:text-4xl md:text-3xl">About</h2>
            </div>
            <div className="px-6 py-6">
              <div className="space-y-4 text-sm leading-7 text-slate-800 sm:text-[1.05rem]">
                {careerObjective.map((line) => (
                  <p key={line} className="text-justify leading-relaxed">{line}</p>
                ))}
              </div>
              <Link
                href="/projects"
                className="mt-6 flex items-center justify-between rounded-2xl bg-slate-800 px-5 py-3 text-base font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-700 hover:shadow-lg"
              >
                View My Work
                <span className="text-xl leading-none">↗</span>
              </Link>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Technical Skills</h2>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {expertise.map((skill) => (
              <Tag key={skill} label={skill} />
            ))}
          </div>
        </section>

        <section id="education">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden border border-[#dcdcdc] bg-gradient-to-br from-white to-indigo-50/30 p-6 sm:p-7">
              <h2 className="text-2xl font-bold text-black sm:text-3xl">Education</h2>
              <div className="mt-4 space-y-4 text-justify text-sm leading-relaxed text-black sm:text-base">
                <p>
                  Kongu Engineering College, Perundurai
                  <br />
                  B.E. Computer Science and Engineering (2023–27)
                  <br />
                  CGPA (Till Semester 5): 9.04
                </p>
                <p>
                  Class XII: 95.5% (2022-23)
                  <br />
                  BVB Matric Higher Secondary School, Thindal, Erode
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden border border-[#dcdcdc] bg-gradient-to-br from-white to-sky-50/30 p-6 sm:p-7">
              <h2 className="text-2xl font-bold text-black sm:text-3xl">Certification</h2>
              <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-black sm:text-base">
                <li>Java SE 17 Developer - Oracle</li>
                <li>MongoDB Associate Developer - MongoDB</li>
              </ul>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Projects Worked</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((project) => (
              <Card key={project.slug} className="overflow-hidden p-0">
                <div className="flex h-40 w-full items-center justify-center bg-slate-100 p-2">
                  <img src={project.image} alt={project.name} className="h-full w-full object-contain" />
                </div>
                <div className="space-y-3 p-4">
                  <h3 className="font-semibold text-slate-900">{project.name}</h3>
                  <p className="text-justify text-sm leading-relaxed text-slate-700">{project.description}</p>
                  <Link href={`/projects/${project.slug}`} className="inline-block text-sm font-semibold text-indigo-700 transition hover:text-indigo-900">
                    Explore Project
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <Card className="overflow-hidden border border-[#dcdcdc] bg-white p-6 transition duration-200 hover:shadow-lg">
            <h2 className="text-2xl font-bold text-black sm:text-3xl">Achievements & Contributions</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-7 text-justify text-sm leading-relaxed text-black sm:text-base">
              <li>Academic Excellence Award (2023-24), Kongu Engineering College - CGPA: 9.36</li>
              <li>GATE Qualifier (2026) - Score: 28 </li>
              <li>Panchakarma Patient Management System - Pre Finalist of SIH (Sep 2025)</li>
              <li>Centralized Blood Bank Management System - Runner-up in Hackon 2.0 (July 2025)</li>
              <li>AI Smart Gloves for Deaf and Dumb - Runner up in IEEE Paper presentation (March 2024)</li>
              <li>Chief Editor, CSEA Newsletter Team</li>
            </ol>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">DSA & LeetCode</h2>
          <Card className="mt-5 overflow-hidden">
            <div className="flex flex-col items-start gap-5 bg-gradient-to-r from-white to-amber-50/40 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#dcdcdc] bg-white p-2">
                  <img src="/lc.gif" alt="LeetCode Badge" className="h-full w-full object-contain" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">LeetCode</p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">250+ Problems Solved</h3>
                  <p className="mt-1 text-sm text-slate-700">Consistent DSA practice with strong focus on patterns, optimization, and interview-level problem solving.</p>
                </div>
              </div>
              <a
                href="https://leetcode.com/u/megha_e_g/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-xl border border-[#dcdcdc] bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
              >
                View LeetCode Profile
              </a>
            </div>
          </Card>
        </section>

        <section id="contact">
          <Card className="bg-gradient-to-r from-white to-emerald-50/40 p-6 sm:p-7">
            <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
            <p className="mt-2 text-justify text-sm leading-relaxed text-slate-700">
              I am currently open to freelancing Full-Stack and DevOps engineering work where platform reliability and system design quality are core priorities.
            </p>
            <p className="mt-2 text-justify text-sm leading-relaxed text-slate-700">Email: meghaeaswaramoorthyr@gmail.com</p>
            <p className="text-justify text-sm leading-relaxed text-slate-700">Phone: 9025090414</p>
            <p className="text-justify text-sm leading-relaxed text-slate-700">GitHub: https://github.com/meghaeg/</p>
          </Card>
        </section>

      </main>
    </div>
  );
}
