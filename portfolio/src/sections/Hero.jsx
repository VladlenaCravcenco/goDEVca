import "../Hero.css";

const PHOTO_SRC = "/me.jpg";

export default function Hero({ t, onOpenContact }) {
  const { hero } = t;

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__grid">
          <div className="hero__photoWrap">
            <img className="hero__photo" src={PHOTO_SRC} alt={hero.photoAlt} />
            <div className="hero__photoShadow" aria-hidden="true" />
          </div>

          <div className="hero__content">
            <div className="hero__top">
              <div className="hero__nameBlock">
                <h1 className="hero__name">Vladlena</h1>
                <div className="hero__surname">Cravcenco</div>
                <div className="hero__role">{hero.role}</div>
              </div>

              <div className="hero__contacts">
                <a className="hero__link" href="mailto:godevca@gmail.com">
                  godevca@gmail.com
                </a>
                <a className="hero__link" href="tel:+37378158084">
                  +373 78 158 084
                </a>

                <div className="hero__social">
                  <a className="hero__pill" href="https://www.linkedin.com/in/vladlena-cravcenco/" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a className="hero__pill" href="https://www.instagram.com/godevca" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                  <a className="hero__pill" href="https://pin.it/3g6dE5Joj" target="_blank" rel="noreferrer">
                    Pinterest
                  </a>
                </div>
              </div>
            </div>

            <div className="hero__blocks">
              {hero.sections.map((section) => (
                <InfoBlock key={section.title} title={section.title}>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </InfoBlock>
              ))}
            </div>

            <div className="hero__ctaRow">
              <a className="hero__cta" href="#projects">{hero.ctaProjects}</a>
              <button className="hero__cta hero__cta--ghost" type="button" onClick={onOpenContact}>
                {hero.ctaContact}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ title, children }) {
  return (
    <div className="heroBlock">
      <div className="heroBlock__title">{title}</div>
      <div className="heroBlock__body">{children}</div>
    </div>
  );
}
