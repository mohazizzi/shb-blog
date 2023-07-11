import Link from "next/link";
import Image from "next/image";
import { spawn } from "child_process";

type Props = {
  post: Meta;
};

function LatestBlogPostItem({ post }: Props) {
  const { id, title, date, tags } = post;
  return (
    <div className="latestpost">
      <Image
        className="latestpost__img"
        src="/images/image04.jpg"
        width="300"
        height="200"
        alt="sdsf"
      />
      <div className="latestpost__ditail">
        <h3 className="latestpost__ditail__title">
          {title}{" "}
          <span className="latestpost__ditail__title__date">{date}</span>
        </h3>
        <p className="latestpost__ditail__tags">
          {tags.map((tag, index) => (
            <Link
              href={`/${tag}`}
              key={index}
              className="latestpost__ditail__tags__cta"
            >
              #{tag}
            </Link>
          ))}
        </p>
        <Link href={`/post/${id}`} className="latestpost__ditail__cta">
          ادامه مطلب
        </Link>
      </div>
    </div>
  );
}
export default LatestBlogPostItem;
