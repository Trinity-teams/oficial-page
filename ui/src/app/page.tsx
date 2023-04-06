import FeatureProjects from "@/components/FeatureProjects";
import Hero from "@/components/Hero";
import ProjectService from "@/services/projects/project.service";

export default async function HomePage() {
  const projects = await new ProjectService().getProjects();
  console.log(projects);
  return (
    <>
      <Hero />
      <FeatureProjects />
    </>
  );
}
