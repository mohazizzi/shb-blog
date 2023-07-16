type props = {
  customHeight: number;
  title: string;
  description?: string;
};

function Hero({ customHeight, title, description }: props) {
  return (
    <section className="hero" style={{ height: `${customHeight}vh` }}>
      <div className="hero__container">
        <h2 className="hero__container__title">{title}</h2>
        {description && <p className="hero__container__date">{description}</p>}
      </div>
      <div className="hero__filter"></div>
    </section>
  );
}
export default Hero;
