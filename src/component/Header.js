import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/profile.jpeg";
import "../styles/header.css";

export default function Header() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div className={"mainAbout"}>
            <div className="all">

                {/*image and header*/}
                <div className={"intro"} onClick={goToHome} style={{ cursor: 'pointer' }}>
                    <img className={"profile"} src={image} alt="Profile of WN - Software Developer and Security Researcher" />
                    <h2>WN</h2>
                    {/* <p>Software Developer/Security Researcher freelancer</p> */}
                </div>

                {/*image and header*/}
                <div className={"navBar"}>
                    <a href="/projects">
                        /projects
                    </a>
                    <a href="/blogs">
                        /Writings
                    </a>
                    <a href="/about">
                        /About
                    </a>
                </div>
            </div>
        </div>
    );
}

// SEO Meta Tags (Add these in the head section of your HTML or in a layout component)
/*
<meta name="description" content="Portfolio of WN - Software Developer, Security Researcher, and Freelancer. Explore projects, writings, and more." />
<meta name="keywords" content="Software Developer, Security Researcher, Freelance Developer, WN Portfolio" />
<meta name="author" content="WN" />
<meta property="og:title" content="WN Portfolio" />
<meta property="og:description" content="Explore the projects, writings, and expertise of WN - a Software Developer and Security Researcher." />
<meta property="og:image" content="/path-to-profile-image.png" />
<meta property="og:url" content="https://your-portfolio-site.com" />
*/
