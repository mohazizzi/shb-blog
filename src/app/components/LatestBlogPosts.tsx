import Link from "next/link";
import Image from "next/image";

import { getPostsMeta } from "@/lib/posts";

async function LatestBlogPosts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p>Sorry, no posts available.</p>;
  }

  return (
    <section className="latestpostslist">
      <div className="container">
        <h2 className="latestpostslist__title">آخرین پستهای وبلاگ</h2>
        <div className="latestpostslist__list">
          {posts.slice(0, 3).map((post) => (
            <div className="latestpostslist__list__latestpost" key={post.id}>
              <Image
                src={post.image}
                alt={post.title}
                className="latestpostslist__list__latestpost__img"
                width={200}
                height={200}
              />
              <div className="latestpostslist__list__latestpost__ditail">
                <h3 className="latestpostslist__list__latestpost__ditail__title">
                  <span className="latestpostslist__list__latestpost__ditail__title__date">
                    {post.date}
                  </span>
                  {post.title}
                </h3>
                {/* <p className="latestpostslist__list__latestpost__ditail__tags">
                  {post.tags.map((tag, index) => (
                    <Link
                      href={`/${tag}`}
                      key={index}
                      className="latestpostslist__list__latestpost__ditail__tags__cta"
                    >
                      {tag}#
                    </Link>
                  ))}
                </p> */}
                <Link
                  href={`/blog/posts/${post.id}`}
                  className="latestpostslist__list__latestpost__ditail__cta"
                >
                  ادامه مطلب
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default LatestBlogPosts;
