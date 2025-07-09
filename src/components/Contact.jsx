import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../hoc';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Ricardo Bravo',
          from_email: form.email,
          to_email: 'ricardojbn5@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          alert(t('contact.success'));
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          alert(t('contact.error'));
        },
      );
  };

  return (
    <section className="py-12 px-4 max-w-3xl mx-auto" id="contact">
      <div className="mb-8 text-center">
        <p className="text-accent uppercase tracking-widest text-sm mb-2">{t('contact.contact')}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">{t('contact.talk')}</h2>
        <p className="text-muted text-lg max-w-xl mx-auto">
          {t('contact.message')}
        </p>
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white border border-secondary/40 rounded-xl p-8 flex flex-col gap-6 shadow-card"
      >
        <label className="flex flex-col text-left">
          <span className="text-text font-medium mb-2">{t('contact.name')}</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t('contact.namePlaceholder')}
            className="bg-secondary/10 border border-secondary/40 rounded-lg px-4 py-3 text-text placeholder:text-muted focus:border-accent outline-none transition"
            required
          />
        </label>
        <label className="flex flex-col text-left">
          <span className="text-text font-medium mb-2">{t('contact.email')}</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t('contact.emailPlaceholder')}
            className="bg-secondary/10 border border-secondary/40 rounded-lg px-4 py-3 text-text placeholder:text-muted focus:border-accent outline-none transition"
            required
          />
        </label>
        <label className="flex flex-col text-left">
          <span className="text-text font-medium mb-2">{t('contact.messageLabel')}</span>
          <textarea
            rows={5}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t('contact.messagePlaceholder')}
            className="bg-secondary/10 border border-secondary/40 rounded-lg px-4 py-3 text-text placeholder:text-muted focus:border-accent outline-none transition"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-accent text-white font-semibold rounded-lg px-6 py-3 mt-2 hover:bg-accent/90 transition"
        >
          {loading ? t('contact.sending') : t('contact.send')}
        </button>
      </form>
    </section>
  );
};

export default SectionWrapper(Contact, 'contact');
