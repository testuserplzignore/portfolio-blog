import Layout from "~/components/layout";
import Projects from "~/components/projects";
import { contentful } from "~/services";

export default function Pages ({projects}) {
  return(
    <Layout>
      <Projects projects={projects} />
    </Layout>
  )
}

Pages.getInitialProps = async ctx => ({projects: await contentful.getProjects()});