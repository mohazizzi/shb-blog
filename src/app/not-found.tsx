import Link from "next/link";
import Hero from "./components/Hero";

export default function NotFound() {
  return (
    <>
      <Hero customHeight={30} title="404" />
      <div className="notfound">
        <p className="notfound__text">این صفحه هنوز ساخته نشده</p>
        <Link href="/" className="notfound__cta">
          بازگشت
        </Link>
      </div>
    </>
  );
}
