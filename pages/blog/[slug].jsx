import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { contentful } from "~/services";

export default function BlogPost({ post }) {
  return (
    <>
      <h1>{post.fields.title}</h1>
      {documentToReactComponents(post.fields.postBody)}
    </>
  );
}

BlogPost.getInitialProps = async ctx => ({
  post: await contentful.getBlogPost(ctx.query.slug)
});
