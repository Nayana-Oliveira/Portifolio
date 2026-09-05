import "./Hero.css";
import profileImg from "../../assets/icon-nayana.jpeg";

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <span className="hero-eyebrow">Olá, eu sou</span>

        <h1>
          Nayana Heslley
          <span> Desenvolvedora Full Stack</span>
        </h1>

        <p>
          Desenvolvo soluções digitais unindo tecnologia, criatividade e código.
          Tenho experiência com desenvolvimento web e mobile, back-end, bancos
          de dados e análise de dados, sempre buscando criar aplicações
          funcionais, modernas e bem estruturadas.
        </p>

        <div className="hero-actions">
          <a href="/curriculo.pdf" className="hero-primary">
            Download CV
          </a>

          <a
            href="https://github.com/Nayana-Oliveira"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-secondary"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profileImg} alt="Foto de perfil" />
      </div>
    </section>
  );
}
