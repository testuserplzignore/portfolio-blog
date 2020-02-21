import Layout from "~/components/Layout"
import Hero from "~/components/hero"
import AboutMe from "~/components/aboutMe"
import {getHero, getAboutMe} from "~/services";

export default function Index({hero, aboutMe}) {
  return (
    <Layout>
      <Hero resp={hero} />
      <AboutMe resp={aboutMe} />
    </Layout>
  );
}

Index.getInitialProps = async ctx => {
  const [hero, aboutMe] = await Promise.all([getHero(), getAboutMe()])
  return {
    hero,
    aboutMe
  };
};