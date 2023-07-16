import Image from "next/image";
import Link from "next/link";

import { getPostsMeta } from "../lib/posts";

import LatestBlogPosts from "./components/LatestBlogPosts";
import Hero from "./components/Hero";

export const revalidate = 86400;

export default async function Home() {
  const posts = await getPostsMeta();
  const imageGallery = [
    "/images/image01.jpg",
    "/images/image02.jpg",
    "/images/image04.jpg",
    "/images/image05.jpg",
    "/images/image06.jpg",
    "/images/image07.jpg",
    "/images/image08.jpg",
    "/images/image10.jpg",
  ];

  if (!posts) {
    return <p>Sorry, no posts available.</p>;
  }
  return (
    <>
      <Hero customHeight={100} title="وبلاگ معماری" />
      <main className="home">
        <section className="home__about">
          <div className="home__about__container">
            <Image
              className="home__about__container__img"
              src="/images/image02.jpg"
              width="300"
              height="300"
              alt="sdadsfds"
            />
            <div className="home__about__container__content">
              <h2 className="home__about__container__content__title">
                درباره ی من
              </h2>
              <p className="home__about__container__content__text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذش
              </p>
              <Link
                href="/about"
                className="home__about__container__content__cta"
              >
                بیشتر بدونید
              </Link>
            </div>
          </div>
        </section>
        <LatestBlogPosts />
        <section className="home__gallery">
          <div className="container">
            <h2 className="home__gallery__title">گالری معماری</h2>
            <div className="home__gallery__images">
              {imageGallery.map((image, index) => (
                <div
                  key={index}
                  className="home__gallery__images__cart"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              ))}
            </div>
            <Link href="/gallery" className="home__gallery__cta">
              صفحه گالری
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
