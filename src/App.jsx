import React from "react";
import "./styles.css";

import profile from "./assets/acero.jfif";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/javas.png";
import reactLogo from "./assets/react.png";
import figma from "./assets/figma.png";

export default function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <nav className="navbar">
        <h2 className="logo" onClick={scrollToTop}>Ace</h2>
        <ul>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </nav>

      
      <section className="home">
        <h1>Ace Robin <br /><span>Sunio</span></h1>
        <p>Creating digital experiences that look good and are easy to use.</p>
        <div className="buttons">
          <button className="viewwork" onClick={() => scrollToSection("projects")}>View Work</button>
          <button className="contactme" onClick={() => scrollToSection("contact")}>Contact Me</button>
        </div>
      </section>

      
      <section id="about" className="about">
        <div>
          <h3>Designing with <span>purpose & passion</span></h3>
          <p>Hey there! I'm Ace  a UI/UX designer who believes great design should feel invisible. <br /> 
          I specialize in creating clean, user centered interfaces that make complex problems feel effortlessly simple.</p>
          <br />
          <p>With a sharp eye for detail and a deep love for minimal aesthetics,  I transform ideas into polished digital experiences. <br /> 
            Whether it's a mobile app, a web platform, or a complete design system  I bring clarity, consistency,
            <br /> and creativity to every pixel.</p>        
        </div>
        <div className="about-image">
          <img src={profile} alt="Profile" />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <h3>My Toolkit</h3>

        <div className="skills-row">
          {[ 
            { img: html, name: "HTML" },
            { img: css, name: "CSS" },
            { img: js, name: "JavaScript" },
            { img: reactLogo, name: "React" },
            { img: figma, name: "Figma" }
          ].map((skill, i) => (
            <div className="skill" key={i}>
              <img src={skill.img} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="projects-grid">
          {[
            {
              title: "Challenge 1",
              desc: "A product card showing a UGREEN magnetic wireless power bank",
              link: "https://www.figma.com/design/axDeqL2APTuJO2SfxSYecw/challenge-1"
            },
            {
              title: "Challenge 2",
              desc: "A sleek music player interface displaying the song “Back to Friends” by SOMBR.",
              link: "https://www.figma.com/design/aB1uKieNx5PGsP4wdON4MK/Challenge-2"
            },
            {
              title: "Rest N Buds",
              desc: "The Rest N Buds is a product we make for noise canceling.",
              link: "https://www.figma.com/design/1dbVLg11hiC3IMmvDwNQJH/Rest-N-Buds"
            },
            {
              title: "AwesomeTodos",
              desc: "AwesomeTodos is a todo app that can you manage your daily tasks all in one place.",
              link: "https://awesome-todos-app-3xgw.onrender.com/"
            },
            {
              title: "Siklab",
              desc: "Siklab is a website the can you find a job or you can find a people who will work to you.",
              link: "https://www.figma.com/design/WSL2c4wKWHOZznEZpfeWP6/Siklab"
            }
          ].map((p, i) => (
            <div className="project-card" key={i}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank">View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h3>Lets <span>Connect</span></h3>
        <div className="contact-buttons">
          <button onClick={() => window.open("https://sunioacerobin28@gmail.com")}>Gmail</button>
          <button onClick={() => window.open("https://www.linkedin.com/in/ace-robin-sunio-1ba58a3b9")}>LinkedIn</button>
          <button onClick={() => window.open("https://github.com/Eshero718")}>Github</button>
          <button onClick={() => window.open("https://www.facebook.com/share/18h6LUUVPN/")}>Facebook</button>
        </div>
      </section>
    </div>
  );
}
