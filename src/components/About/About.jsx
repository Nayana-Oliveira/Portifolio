import "./About.css";

export default function About() {
  const education = [
    {
      period: "2025 — 2027",
      course: "Análise e Desenvolvimento de Sistemas",
      institution: "Centro Universitário Senac Campus Santo Amaro",
      type: "Tecnólogo",
    }
  ];

  return (
    <section className="about">
      <div className="education">
        <div className="education-header">
          <span>Minha trajetória</span>
          <h2>Formação</h2>
        </div>

        <div className="education-list">
          {education.map((item, index) => (
            <div className="education-item" key={index}>
              <span className="education-period">{item.period}</span>

              <div>
                <h3>{item.course}</h3>
                <p>{item.institution}</p>
                <span>{item.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
