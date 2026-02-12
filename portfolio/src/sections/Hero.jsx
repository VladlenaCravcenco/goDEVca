import "../Hero.css";

const PHOTO_SRC = "/me.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__grid">
          <div className="hero__photoWrap">
            <img className="hero__photo" src={PHOTO_SRC} alt="Владлена" />
            <div className="hero__photoShadow" aria-hidden="true" />
          </div>

          <div className="hero__content">
            <div className="hero__top">
              <div className="hero__nameBlock">
                <h1 className="hero__name">Vladlena</h1>
                <div className="hero__surname">Cravcenco</div>
                <div className="hero__role">Designer • Visual creator</div>
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
              <InfoBlock title="Что я создаю">
                <ul>
                  <li>Рекламные баннеры и креативы для digital-продвижения</li>
                  <li>Айдентику, логотипы и бренд-системы</li>
                  <li>3D-визуализацию и анимацию в Blender</li>
                  <li>Визуал для продуктов: от идеи до финального рендера</li>
                </ul>
              </InfoBlock>

              <InfoBlock title="Мои сильные стороны">
                <ul>
                  <li>Композиция и подача: фокус, баланс, читаемость</li>
                  <li>Цвет и стиль под бренд: аккуратно и современно</li>
                  <li>Сильные креативы под рекламу: чтобы цепляло</li>
                  <li>Детали и качество: довожу визуал до “дорогого” вида</li>
                </ul>
              </InfoBlock>

              <InfoBlock title="Инструменты">
                <ul>
                  <li>Illustrator — вектор, логотипы, бренд-элементы</li>
                  <li>Photoshop — рекламные макеты, ретушь, компоновка</li>
                  <li>Blender — 3D-сцены, продуктовые рендеры, анимация</li>
                  <li>Figma — композиции, концепции, системы</li>
                </ul>
              </InfoBlock>

              <InfoBlock title="Подход к работе">
                <ul>
                  <li>Сначала смысл и идея — потом визуальный стиль</li>
                  <li>Делаю визуал под задачу: реклама / бренд / продукт</li>
                  <li>Люблю чистую подачу без визуального мусора</li>
                </ul>
              </InfoBlock>
            </div>

            <div className="hero__ctaRow">
              <a className="hero__cta" href="#projects">Посмотреть проекты</a>
              <a className="hero__cta hero__cta--ghost" href="#contact">Обсудить проект</a>
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