import Link from "next/link";
import Image from "next/image";

import { getPostsMeta } from "@/lib/posts";

import Hero from "../components/Hero";

export const revalidate = 86400;

export default async function Home() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p>Sorry, no posts available.</p>;
  }

  return (
    <>
      <Hero customHeight={30} title="وبلاگ" />
      <main className="blog">
        <div className="blog__container">
          {posts.map((post) => (
            <div className="blog__container__post" key={post.id}>
              <Image
                src={post.image}
                alt="{post.title}"
                className="blog__container__post__img"
                width={200}
                height={200}
              />
              <div className="blog__container__post__info">
                <h3 className="blog__container__post__info__title">
                  {post.title}{" "}
                  <span className="blog__container__post__info__title__date">
                    {post.date}
                  </span>
                </h3>
                <p className="blog__container__post__info__description">
                  {post.description}
                </p>
                <Link
                  href={`/blog/posts/${post.id}`}
                  className="blog__container__post__info__cta"
                >
                  ادامه مطلب
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
