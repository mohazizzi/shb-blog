import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h1 className="navbar__container__logo">
          <Link href="/" className="navbar__container__logo__cta">
            SHB<span className="navbar__container__logo__cta__span">Blog</span>
          </Link>
        </h1>
        <div className="navbar__container__nav">
          <Link href="/" className="navbar__container__nav__item">
            خانه
          </Link>
          <Link href="/blog" className="navbar__container__nav__item">
            وبلاگ
          </Link>
          <Link href="/gallery" className="navbar__container__nav__item">
            گالری
          </Link>
        </div>
      </div>
    </nav>
  );
}
