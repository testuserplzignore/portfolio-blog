import Link from "next/link"
import { contentful } from "~/services";
import Layout from "~/components/layout";

export default function Blog (props) { 
  
  return (
    <Layout>
      <div style={{ marginTop: "2em" }}>
        <ul>
          {props.blogPosts.items.map(post => (
            <Link href={`/blog/${post.sys.id}`} key={post.sys.id}>
              <li>
                <a>{post.fields.title}</a>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

Blog.getInitialProps = async ctx => ({ blogPosts: await contentful.getBlog() });