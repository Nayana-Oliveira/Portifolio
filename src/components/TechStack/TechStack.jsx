import "./TechStack.css";
import { FaJava, FaPython, FaJs, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaAngular, FaGitAlt, FaCloud, FaChartBar } from "react-icons/fa";
import { SiTypescript,SiMysql, SiSqlite, SiMongodb } from "react-icons/si";

export default function TechStack() {
  const technologies = [
    {
      name: "Java",
      category: "Back-end",
      icon: <FaJava />,
    },
    {
      name: "Python",
      category: "Back-end",
      icon: <FaPython />,
    },
    {
      name: "JavaScript",
      category: "Linguagem",
      icon: <FaJs />,
    },
    {
      name: "TypeScript",
      category: "Linguagem",
      icon: <SiTypescript />,
    },
    {
      name: "Node.js",
      category: "Back-end",
      icon: <FaNodeJs />,
    },
    {
      name: "React",
      category: "Front-end",
      icon: <FaReact />,
    },
    {
      name: "React Native",
      category: "Mobile",
      icon: <FaReact />,
    },
    {
      name: "Angular",
      category: "Front-end",
      icon: <FaAngular />,
    },
    {
      name: "HTML",
      category: "Front-end",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      category: "Front-end",
      icon: <FaCss3Alt />,
    },
    {
      name: "MySQL",
      category: "Banco de dados",
      icon: <SiMysql />,
    },
    {
      name: "SQLite",
      category: "Banco de dados",
      icon: <SiSqlite />,
    },
    {
      name: "MongoDB",
      category: "NoSQL",
      icon: <SiMongodb />,
    },
    {
      name: "Git",
      category: "Versionamento",
      icon: <FaGitAlt />,
    },
    {
      name: "Power BI",
      category: "Data Analytics",
      icon: <FaChartBar />,
    },
    {
      name: "AWS Cloud",
      category: "Cloud Computing",
      icon: <FaCloud />,
    },
  ];

  return (
    <section id="skills" className="tech-stack">
      <div className="section-header">
        <span>Minhas habilidades</span>
        <h2>Tech Stack</h2>
      </div>

      <div className="tech-grid">
        {technologies.map((tech) => (
          <div className="tech-card" key={tech.name}>
            <div className="tech-icon">{tech.icon}</div>

            <div className="tech-info">
              <h3>{tech.name}</h3>
              <span>{tech.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}