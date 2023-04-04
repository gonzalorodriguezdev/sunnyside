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
        <section className="section  section__img--egg">
          <figure className="section__figure">
            <img
              alt=""
              className="section__img"
              src="./src/assets/images/desktop/image-transform.jpg"
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
              src="./src/assets/images/desktop/image-stand-out.jpg"
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
        <section className="section">
          <article className="section__testimonials">
            <h2 className="testimonials__title">Client testimonials</h2>
            <div className="testimonial">
              <img alt="" className="testimonial__emily" src="" />
              <p className="testimonial__paragraph">
                We put our trust in Sunnyside and they delivered, making sure our needs were met and
                deadlines were always hit.
              </p>
              <div className="testimonial__name">Emily R.</div>
              <div className="testimonial__job">Marketing Director</div>
            </div>
            <div className="testimonial">
              <img alt="" className="testimonial__thomas" src="" />
              <p className="testimonial__paragraph">
                Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made
                it a satisfying and enjoyable experience.
              </p>
              <div className="testimonial__name">Thomas S.</div>
              <div className="testimonial__job">Chief Operating Officer</div>
            </div>
            <div className="testimonial">
              <img alt="" className="testimonial__jennie" src="" />
              <p className="testimonial__paragraph">
                Incredible end result! Our sales increased over 400% when we worked with Sunnyside.
                Highly recommended!
              </p>
              <div className="testimonial__name">Jennie F.</div>
              <div className="testimonial__job">Business Owner</div>
            </div>
          </article>
        </section>
        <section className="section">
          <article className="images">
            <img
              alt=""
              className="images__img"
              src="./src/assets/images/mobile/image-gallery-milkbottles.jpg"
            />
            <img
              alt=""
              className="images__img"
              src="./src/assets/images/mobile/image-gallery-orange.jpg"
            />
            <img
              alt=""
              className="images__img"
              src="./src/assets/images/mobile/image-gallery-cone.jpg"
            />
            <img
              alt=""
              className="images__img"
              src="./src/assets/images/mobile/image-gallery-sugar-cubes.jpg"
            />
          </article>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__wrapper">
          <figure className="footer__logo">
            <img alt="" className="footer__img" src="./src/assets/images/logo-green.svg" />
          </figure>
          <ul className="footer__list">
            <li>
              <a className="footer_link" href="#">
                About
              </a>
            </li>
            <li>
              <a className="footer_link" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="footer_link" href="#">
                Projects
              </a>
            </li>
          </ul>
          <article className="footer__media">
            <img alt="" className="footer__facebook" src="./src/assets/images/icon-facebook.svg" />
            <img
              alt=""
              className="footer__instagram"
              src="./src/assets/images/icon-instagram.svg"
            />
            <img alt="" className="footer__twitter" src="./src/assets/images/icon-twitter.svg" />
            <img
              alt=""
              className="footer__pinterest"
              src="./src/assets/images/icon-pinterest.svg"
            />
          </article>
        </div>
      </footer>
    </main>
  );
}

export default App;
