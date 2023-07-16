import Link from "next/link";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import Hero from "@/app/components/Hero";

export const revalidate = 86400;

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped!

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = meta.date; // getFormattedDate(meta.date)

  return (
    <>
      <Hero customHeight={30} title={meta.title} description={pubDate} />
      <section className="post">
        <div className="container">
          <article className="post__content">{content}</article>
          <section className="post__tags">
            <h3 className="post__tags__title">پست های مشابه:</h3>
            <div className="post__tags__group">
              {meta.tags.map((tag, i) => (
                <Link
                  key={i}
                  href={`/tags/${tag}`}
                  className="post__tags__group__cta"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </section>
          <Link href="/blog" className="post__cta">
            بازگشت به صفحه وبلاگ
          </Link>
        </div>
      </section>
    </>
  );
}
