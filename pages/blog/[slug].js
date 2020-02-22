import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "~/components/Layout"
import {contentful} from "../../services";

export default function BlogPost({post}) { 
  console.log(post);
  
  return (
    <Layout>
      <h1>{post.fields.title}</h1>
      {documentToReactComponents(post.fields.postBody)}
    </Layout>
  )
}

BlogPost.getInitialProps = async ctx => { 
  return { post: await contentful.getBlogPost(ctx.query.slug) };
}