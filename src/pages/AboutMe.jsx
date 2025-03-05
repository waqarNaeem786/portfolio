import React from 'react';
import Header from '../component/Header';
import Footbar from '../component/Footbar';

function AboutMe() {
  return (
    <div>
      {/* SEO Meta Tags */}
      <head>
        <title>About Me - WN Portfolio</title>
        <meta name="description" content="Learn more about WN - Software Developer, Security Researcher, and aspiring entrepreneur." />
        <meta name="keywords" content="WN Portfolio, Software Developer, Security Researcher, IC Design, Indie Entrepreneur" />
        <meta name="author" content="WN" />
        <meta property="og:title" content="About WN" />
        <meta property="og:description" content="Discover WN's journey in software development, security research, and IC design entrepreneurship." />
        <meta property="og:image" content="/path-to-profile-image.png" />
        <meta property="og:url" content="https://your-portfolio-site.com/about" />
      </head>

      <Header />

      <div>
        <h2>About Me</h2>
        <hr/>
        
        <p style={{fontSize: "1.25rem"}}>
          I am WN, a multifaceted professional with a strong background in software development,
          security research, and entrepreneurship. With a deep passion for technology and innovation,
          I have honed my skills across various domains, including web development, penetration
          testing, and integrated circuit (IC) design.
        </p>
        <p style={{fontSize: "1.25rem"}}>
          My journey has been fueled by curiosity and a drive for excellence. I have worked on
          diverse projects ranging from stock market simulators built with Node.js and Next.js to
          advanced Android malware for penetration testing, using Java for APK development and Go
          for command-and-control servers. These projects not only reflect my technical expertise
          but also my strategic approach to solving complex problems.
        </p>
        <p style={{fontSize: "1.25rem"}}>
          Currently, I am preparing for the CSS exam with a focus on International Relations,
          European History, and Economics, while balancing my professional and entrepreneurial
          aspirations. My ambition to establish an integrated circuit (IC) design company in
          Pakistan highlights my commitment to pushing boundaries and creating impactful
          technological solutions.
        </p>
        <p style={{fontSize: "1.25rem"}}>
          Whether it's crafting efficient web applications, conducting thorough security
          assessments, or building innovative hardware designs, I bring a unique blend of technical
          prowess, analytical thinking, and creative vision. I am eager to collaborate, innovate,
          and drive forward-thinking projects that make a difference.
        </p>
      </div>
    <hr/>
      <Footbar />
    </div>
  );
}

export default AboutMe;
