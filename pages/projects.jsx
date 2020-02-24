import Projects from "~/components/projects";
import { contentful } from "~/services";

export default function Pages({ projects }) {
  return <Projects projects={projects} />;
}

Pages.getInitialProps = async ctx => ({
  projects: await contentful.getProjects()
});
