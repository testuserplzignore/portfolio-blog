import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "~/components/layout";
import {contentful} from "../../services";

export default function BlogPost({post}) { 
  
  return (
    <Layout>
      <h1>{post.fields.title}</h1>
      {documentToReactComponents(post.fields.postBody)}
    </Layout>
  )
}

BlogPost.getInitialProps = async ctx => ({ 
  post: await contentful.getBlogPost(ctx.query.slug) 
})
