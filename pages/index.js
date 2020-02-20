import Layout from "~/components/Layout"
import Hero from "~/components/hero"
import { getHero } from "~/services"

export default function Index({hero}) {
  return (
    <Layout>
      <Hero resp={hero} />
    </Layout>
  );
}

Index.getInitialProps = async ctx => {
  const hero = await getHero();  
  return { hero };
};