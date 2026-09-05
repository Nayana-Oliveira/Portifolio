import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import peiDigitalImg from "../../assets/pei-digital.png";
import bosqueSuporte from "../../assets/bosque-suporte.png"
import equipamentos from "../../assets/equipamentos.png"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "PEI Digital",
      description:
        "Sistema web para criação, acompanhamento e aprovação de Planos Educacionais Individualizados (PEIs), com fluxo entre professores, AEE, coordenação e direção.",
      technologies: ["HTML", "CSS", "Javascript", "Google App Script",],
      image: peiDigitalImg,
      github: "https://github.com/Nayana-Oliveira/PEI-Digital",
      demo: "https://pei-digital-five.vercel.app/",
    },
    {
      id: 2,
      title: "Bosque Suporte",
      description:
        "Sistema de tickets de suporte (Help Desk) full-stack para a Escola Bosque. Usuários abrem chamados (com anexos e categorias) e administradores (suporte) gerenciam tudo em um painel: alteram status, prioridade e respondem. O admin também pode criar novas contas para setores (ex: Biblioteca).",
      technologies: ["HTML", "MySQL", "Node.js", "React Vite"],
      image: bosqueSuporte,
      github: "https://github.com/Nayana-Oliveira/Bosque-Suporte",
      demo: "https://bosque-suporte.vercel.app/login",
    },
    {
      id: 3,
      title: "Equipamentos Tecnológicos",
      description:
        "Sistema web desenvolvido para a Escola Estadual Eusébio de Paula Marcondes, Prof., para controle de equipamentos pedagógicos, com horários por turno, filtros, status em tempo real, próximos usos e agenda diária.",
      technologies: ["HTML", "CSS", "Javascript"],
      image: equipamentos,
      github: "https://github.com/Nayana-Oliveira/Equipamentos-Pedagogicos",
      demo: "https://equipamentos-pedagogicos.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <span>Meu trabalho</span>
        <h2>Featured Projects</h2>

        <p>
          Alguns projetos que desenvolvi utilizando diferentes tecnologias e
          soluções.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-image">
              <img
                src={project.image}
                alt={`Preview do projeto ${project.title}`}
              />
            </div>

            <div className="project-content">
              <span>Projeto {String(project.id).padStart(2, "0")}</span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn github-btn"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn demo-btn"
                >
                  Live Demo
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
