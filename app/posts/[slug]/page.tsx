import ErrorPage from "next/error";
import Header from "../../../components/header";
import PostHeader from "../../../components/post-header";
import PostBody from "../../../components/post-body";
import { getAllPosts, getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import PostType from "../../../interfaces/post";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug, [
    "title",
    "ogImage",
  ]) as unknown as PostType;
  return {
    title: post.title,
    openGraph: { images: [{ url: post.ogImage.url }] },
  };
}

export default async function Post({ params }: Props) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]) as unknown as PostType;

  const content = await markdownToHtml(post.content || "");

  if (!post?.slug) {
    throw new Error("Post not found");
  }

  return (
    <>
      <Header />
      <article className="mb-32">
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <PostBody content={content} />
      </article>
    </>
  );
}

export const dynamicParams = true;
export const dynamic = "error";

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);

  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}
