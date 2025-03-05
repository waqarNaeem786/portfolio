import React from "react";
import "../styles/project.css";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";


export default function Project() {
  const projects = [
    {
      img: project2,
      title: "Movie Hub",
      description: "Scrapes movies from free sources all in one place.",
      link: "https://github.com/waqarNaeem786/Movie-Hub"
    },
    {
      img: project3,
      title: "Manga Reader",
      description: "Online Manga Reader for Anime Enthusiasts.",
      link: "https://github.com/waqarNaeem786/Manga-Reader"
    },
    {
      img: project4,
      title: "Define",
      description: "Command line tool to get meanings of words.",
      link: "https://github.com/waqarNaeem786/Define"
    },
    {
      img: project5,
      title: "Tasbeeh Counter",
      description: "Tasbeeh Counter App made with Android Studio.",
      link: "https://github.com/waqarNaeem786/Tasbeeh-Counter"
    }
  ];

  return (
    <div className="projectForHome">
      <br />
      <br />

      <div className="heading">
        <h2>Personal Projects</h2>
        <br />
        <span>Below are some of my personal Projects.</span>
      </div>

      <br />
      <br />
      <br />

      <div className="allCards">
        {projects.map((project, index) => (
          <div
            className="card"
            key={index}
            onClick={() => window.open(project.link, "_blank")}
            style={{ cursor: "pointer" }}
          >
            <img className="projectImagesForHome" src={project.img} alt={project.title} />
            <div className="card-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}

        <a href="/projects" target="_blank" rel="noopener noreferrer">
          See More Projects ...
        </a>
      </div>
    </div>
  );
}
