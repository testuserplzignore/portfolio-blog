import Hero from "~/components/hero"
import { getHero } from "~/services"

export default function Index({hero}) {
  return (
    <div>
      <Hero resp={hero} />
      <p>Hello Next.js</p>
    </div>
  );
}

Index.getInitialProps = async ctx => {
  const hero = await getHero();  
  return { hero };
};