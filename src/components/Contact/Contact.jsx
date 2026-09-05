import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Enviando...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(() => {
        setStatus("Mensagem enviada com sucesso!");
        form.current.reset();
      })
      .catch(() => {
        setStatus("Erro ao enviar a mensagem.");
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-info">
        <span>Contato</span>

        <h2>
          Vamos construir
          <br />
          algo juntos?
        </h2>

        <p>
          Tem um projeto, uma oportunidade ou quer conversar sobre tecnologia?
          Entre em contato comigo.
        </p>

        <div className="contact-links">
          <a href="mailto:nayanaheslley123@gmail.com">
            <FaEnvelope />
            nayanaheslley123@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/nayana-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://github.com/Nayana-Oliveira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nome</label>

          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Seu nome"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>

          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="seuemail@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensagem</label>

          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Escreva sua mensagem..."
            required
          />
        </div>

        <button type="submit">Enviar mensagem</button>

        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  );
}
