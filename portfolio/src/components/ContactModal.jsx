import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactModal.css";

export default function ContactModal({ open, onClose }) {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error
  const [errorText, setErrorText] = useState("");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const toEmail = import.meta.env.VITE_CONTACT_TO_EMAIL;

  const canSend = useMemo(() => {
    return Boolean(serviceId && templateId && publicKey);
  }, [serviceId, templateId, publicKey]);

  if (!open) return null;

  const onBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorText("");

    const fd = new FormData(e.currentTarget);

    // honeypot (если заполнено — это бот)
    const botField = (fd.get("company") || "").toString().trim();
    if (botField) return;

    const name = (fd.get("name") || "").toString().trim();
    const phone = (fd.get("phone") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    const message = (fd.get("message") || "").toString().trim();

    if (!name || !phone || !message) {
      setStatus("error");
      setErrorText("Заполни: имя, телефон и задачу.");
      return;
    }

    if (!canSend) {
      setStatus("error");
      setErrorText("EmailJS не настроен: проверь переменные VITE_EMAILJS_* в .env");
      return;
    }

    try {
      setStatus("sending");

      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: toEmail,
          from_name: name,
          from_phone: phone,
          reply_to: email || "",
          message: message,
          source: "goDEVca • дизайн-портфолио",
        },
        { publicKey }
      );

      setStatus("ok");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
      setErrorText("Не отправилось. Попробуй ещё раз или напиши в Instagram.");
    }
  };

  return (
    <div className="modal" onMouseDown={onBackdrop} role="dialog" aria-modal="true">
      <div className="modal__panel">
        <div className="modal__top">
          <div className="modal__title">Заявка</div>
          <button className="modal__close" type="button" onClick={onClose} aria-label="Закрыть">
            ✕
          </button>
        </div>

        <form className="modal__form" onSubmit={onSubmit}>
          {/* honeypot */}
          <input className="hp" name="company" tabIndex={-1} autoComplete="off" />

          <label className="field">
            <span className="field__label">Имя *</span>
            <input className="field__input" name="name" placeholder="Как к вам обращаться" />
          </label>

          <label className="field">
            <span className="field__label">Телефон / Telegram *</span>
            <input className="field__input" name="phone" placeholder="+373… или @username" />
          </label>

          <label className="field">
            <span className="field__label">Email (необязательно)</span>
            <input className="field__input" name="email" placeholder="you@mail.com" />
          </label>

          <label className="field">
            <span className="field__label">Задача *</span>
            <textarea
              className="field__textarea"
              name="message"
              placeholder="Что нужно сделать? Сроки? Пример/референс?"
              rows={5}
            />
          </label>

          {status === "error" && <div className="modal__error">{errorText}</div>}
          {status === "ok" && <div className="modal__ok">Отправлено ✅ Я отвечу в ближайшее время.</div>}

          <div className="modal__actions">
            <button
              className="modal__btn modal__btn--ghost"
              type="button"
              onClick={onClose}
            >
              Отмена
            </button>
            <button className="modal__btn" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Отправляю…" : "Отправить"}
            </button>
          </div>

          <div className="modal__note">
            Нажми <b>Esc</b> чтобы закрыть.
          </div>
        </form>
      </div>
    </div>
  );
}