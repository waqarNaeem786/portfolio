import React from 'react';
import Header from '../component/Header';
import Footbar from '../component/Footbar';
const projects = [
  {
    name: 'Manga Reader',
    description: 'A web application built around a scraper that gathers data from different sites containing manga comics, providing a great resource for comic readers.',
    github: 'https://github.com/waqarNaeem786/manga-reader'
  },
  {
    name: 'Tasbeeh Counter',
    description: 'A React Native app built as a side project to enhance mobile development skills.',
    github: 'https://github.com/waqarNaeem786/Tasbeeh-Counter'
  },
  {
    name: 'Simple Blogging',
    description: 'A blogging website developed to enhance web development skills.',
    github: 'https://github.com/waqarNaeem786/Simple-bloging'
  },
  {
    name: 'Huffman Implementation',
    description: 'An implementation of the Huffman coding algorithm.',
    github: 'https://github.com/waqarNaeem786/Huffman-Implementation'
  },
  {
    name: 'Portfolio',
    description: 'Personal portfolio website showcasing projects and skills.',
    github: 'https://github.com/waqarNaeem786/Portfolio'
  },
  {
    name: 'Daily Mail',
    description: 'A Node.js based script.',
    github: 'https://github.com/waqarNaeem786/dailymail'
  },
  {
    name: 'Tasbeeh App',
    description: 'A Tasbeeh counter application.',
    github: 'https://github.com/waqarNaeem786/tasbeeh-app'
  },
  {
    name: 'Dirbuf',
    description: 'Yet another directory bruteforcer.',
    github: 'https://github.com/waqarNaeem786/dirbuf'
  },
  {
    name: 'Systemd Monitor',
    description: 'A systemd monitor tool.',
    github: 'https://github.com/waqarNaeem786/systemd_monitor'
  }
];

function Projects() {
  return (
    <div>
      <Header />
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <br />
          <h2>{project.name}</h2>
          <p style={{fontSize: "1.25rem"}}>{project.description}</p>
          <br />

          <a href={project.github} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>

          {index < projects.length - 1 && <hr />}
          <br />

        </div>
      ))}
      <br/>
      <br/>
      <br/>
      <hr/>
      <Footbar/>
    </div>
  );
}

export default Projects;
