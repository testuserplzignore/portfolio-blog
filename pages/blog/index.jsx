import Link from "next/link"
import { contentful } from "~/services";

export default function Blog (props) { 
  
  return (
    <>
      <div style={{ marginTop: "2em" }}>
        <ul>
          {props.blogPosts.items.map(post => (
            <li key={post.sys.id}>
              <Link href={`/blog/[slug]`} as={`/blog/${post.sys.id}`}>
                <a>{post.fields.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

Blog.getInitialProps = async ctx => ({ blogPosts: await contentful.getBlog() });