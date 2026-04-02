import { useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactModal.css";

export default function ContactModal({ open, onClose, t }) {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error
  const [errorText, setErrorText] = useState("");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const toEmail = import.meta.env.VITE_CONTACT_TO_EMAIL;

  const canSend = useMemo(() => {
    return Boolean(serviceId && templateId && publicKey);
  }, [serviceId, templateId, publicKey]);

  useEffect(() => {
    if (!open) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setErrorText("");
    }
  }, [open]);

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
      setErrorText(t.errorRequired);
      return;
    }

    if (!canSend) {
      setStatus("error");
      setErrorText(t.errorEmail);
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
          source: t.source,
        },
        { publicKey }
      );

      setStatus("ok");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
      setErrorText(t.errorSubmit);
    }
  };

  return (
    <div className="modal" onMouseDown={onBackdrop} role="dialog" aria-modal="true">
      <div className="modal__panel">
        <div className="modal__top">
          <div className="modal__title">{t.title}</div>
          <button className="modal__close" type="button" onClick={onClose} aria-label={t.close}>
            ✕
          </button>
        </div>

        <form className="modal__form" onSubmit={onSubmit}>
          {/* honeypot */}
          <input className="hp" name="company" tabIndex={-1} autoComplete="off" />

          <label className="field">
            <span className="field__label">{t.name}</span>
            <input className="field__input" name="name" placeholder={t.namePlaceholder} />
          </label>

          <label className="field">
            <span className="field__label">{t.phone}</span>
            <input className="field__input" name="phone" placeholder={t.phonePlaceholder} />
          </label>

          <label className="field">
            <span className="field__label">{t.email}</span>
            <input className="field__input" name="email" placeholder={t.emailPlaceholder} />
          </label>

          <label className="field">
            <span className="field__label">{t.message}</span>
            <textarea
              className="field__textarea"
              name="message"
              placeholder={t.messagePlaceholder}
              rows={5}
            />
          </label>

          {status === "error" && <div className="modal__error">{errorText}</div>}
          {status === "ok" && <div className="modal__ok">{t.success}</div>}

          <div className="modal__actions">
            <button className="modal__btn modal__btn--ghost" type="button" onClick={onClose}>
              {t.cancel}
            </button>
            <button className="modal__btn" type="submit" disabled={status === "sending"}>
              {status === "sending" ? t.sending : t.submit}
            </button>
          </div>

          <div className="modal__note">{t.note}</div>
        </form>
      </div>
    </div>
  );
}
