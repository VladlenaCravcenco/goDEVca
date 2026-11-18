import { LANGUAGES } from "../i18n";
import "./SiteHeader.css";

export default function SiteHeader({ lang, onChangeLanguage, onOpenContact, t }) {
  return (
    <header className="siteHeader">
      <div className="siteHeader__inner">
        <a className="siteHeader__logo" href={`/${lang}`} aria-label="goDEVca">
          <img src={`${import.meta.env.BASE_URL}godevca-mark.svg`} width="36" height="36" alt="" />
          <span>goDEVca</span>
        </a>

        <div className="siteHeader__actions">
          <div className="siteHeader__lang" aria-label={t.languageLabel}>
            {LANGUAGES.map((language) => (
              <button
                key={language}
                className={`siteHeader__langBtn ${lang === language ? "is-active" : ""}`}
                type="button"
                onClick={() => onChangeLanguage(language)}
                aria-pressed={lang === language}
              >
                {language.toUpperCase()}
              </button>
            ))}
          </div>

          <a
            className="siteHeader__btn siteHeader__btn--ghost"
            href="https://godevca.com"
            target="_blank"
            rel="noreferrer"
          >
            {t.siteHeader.websites}
          </a>

          <button className="siteHeader__btn" type="button" onClick={onOpenContact}>
            {t.siteHeader.contact}
          </button>
        </div>
      </div>
    </header>
  );
}
