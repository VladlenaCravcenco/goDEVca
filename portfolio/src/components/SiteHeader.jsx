import { useEffect, useState } from "react";
import ContactModal from "./ContactModal";
import "./SiteHeader.css";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="siteHeader">
        <div className="siteHeader__inner">
          <a className="siteHeader__logo" href="/" aria-label="goDEVca">
            goDEVca
          </a>

          <div className="siteHeader__actions">
            {/* Ссылка на сайт про сайты (вставь свой URL) */}
            <a
              className="siteHeader__btn siteHeader__btn--ghost"
              href="https://godevca.com" // <-- поменяй на нужный
              target="_blank"
              rel="noreferrer"
            >
              К сайтам
            </a>

            <button
              className="siteHeader__btn"
              type="button"
              onClick={() => setOpen(true)}
            >
              Контакт
            </button>
          </div>
        </div>
      </header>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}