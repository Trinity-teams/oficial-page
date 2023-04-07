import FeatureProjects2 from "@/components/FeatureProjects2";
import Hero from "@/components/Hero";
import ProjectService from "@/services/projects/project.service";

export default async function HomePage() {
  //projects
  const projects = await new ProjectService().getProjects();
  return (
    <>
      <Hero />
      <FeatureProjects2 projects={projects} />
    </>
  );
}
