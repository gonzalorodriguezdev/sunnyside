import "./App.css";

function App() {
  return (
    <main className="App">
      <header className="header">
        <nav className="nav">
          <figure className="nav__logo">
            <img alt="" className="nav__img" src="./src/assets/images/logo.svg" />
          </figure>
          <figure className="nav__menu">
            <img alt="" className="menu__logo" src="./src/assets/images/icon-hamburger.svg" />
          </figure>
        </nav>
        <section className="nav__title">
          <h1 className="nav__subtitle">We are creatives</h1>
          <img alt="" className="nav__arrow" src="./src/assets/images/icon-arrow-down.svg" />
        </section>
      </header>
      <main className="main">
        <section className="section">
          <figure className="section__figure">
            <img
              alt=""
              className="section__img"
              src="./src/assets/images/mobile/image-transform.jpg"
            />
          </figure>
          <article className="section__texts">
            <h2 className="section__title">Transform your brand</h2>
            <p className="section__paragraph">
              We are a full-service creative agency specializing in helping brands grow fast. Engage
              your clients through compelling visuals that do most of the marketing for you.
            </p>
            <a className="section__cta section__cta1" href="#">
              Learn more
            </a>
          </article>
        </section>
        <section className="section">
          <figure className="section__figure">
            <img
              alt=""
              className="section__img"
              src="./src/assets/images/mobile/image-stand-out.jpg"
            />
          </figure>
          <article className="section__texts">
            <h2 className="section__title">Stand out to the right audience</h2>
            <p className="section__paragraph">
              Using a collaborative formula of designers, researchers, photographers, videographers,
              and copywriters, we’ll build and extend your brand in digital places.
            </p>
            <a className="section__cta section__cta2" href="#">
              Learn more
            </a>
          </article>
        </section>
        <section className="section">
          <figure className="section__cherry">
            <h2 className="cherry__title">Graphic design</h2>
            <p className="cherry__paragraph">
              Great design makes you memorable. We deliver artwork that underscores your brand
              message and captures potential clients’ attention.
            </p>
          </figure>
          <figure className="section__orange">
            <h2 className="orange__title">Photography</h2>
            <p className="orange__paragraph">
              Photography Increase your credibility by getting the most stunning, high-quality
              photos that improve your business image.
            </p>
          </figure>
        </section>
      </main>
      Client testimonials We put our trust in Sunnyside and they delivered, making sure our needs
      were met and deadlines were always hit. Emily R. Marketing Director Sunnyside’s enthusiasm
      coupled with their keen interest in our brand’s success made it a satisfying and enjoyable
      experience. Thomas S. Chief Operating Officer Incredible end result! Our sales increased over
      400% when we worked with Sunnyside. Highly recommended! Jennie F. Business Owner About
      Services Projects Contact
    </main>
  );
}

export default App;
