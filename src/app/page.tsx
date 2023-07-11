import Image from "next/image";
import Link from "next/link";
import { getPostsMeta } from "../lib/posts";
import LatestBlogPostItem from "./components/LatestBlogPostItem";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <Navbar />
      <section className="hero">
        <div className="hero__container">
          <h2 className="hero__container__title">وبلاگ معماری</h2>
        </div>
        <div className="hero__filter"></div>
      </section>
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
                درباه ی من
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
        <section className="home__latestpostslist">
          <div className="container">
            <h2 className="home__latestpostslist__title">آخرین پستهای وبلاگ</h2>
            <div className="home__latestpostslist__list">
              {posts.slice(0, 3).map((post) => (
                <LatestBlogPostItem key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
        <section className="home__gallery">
          <div className="container">
            <h2 className="home__gallery__title">گالری معماری</h2>
            <div className="home__gallery__images">
              {imageGallery.map((image) => (
                <div
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
      <Footer />
    </>
  );
}
