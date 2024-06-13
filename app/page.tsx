"use client";
import { Footer } from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/Recenteprojects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl px-4">

      </div>
      <Hero />
      <Grid />
      <RecentProjects />

      <Footer />
    </main>
  );
}
