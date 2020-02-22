import Layout from "~/components/layout"
import Hero from "~/components/hero"
import AboutMe from "~/components/aboutMe"
import {contentful} from "~/services";

export default function Index({hero, aboutMe}) {
  return (
    <Layout>
      <Hero resp={hero} />
      <AboutMe resp={aboutMe} />
    </Layout>
  );
}

Index.getInitialProps = async ctx => {
  const [hero, aboutMe] = await Promise.all([
    contentful.getHero(),
    contentful.getAboutMe()
  ]);
  return {
    hero,
    aboutMe
  };
};