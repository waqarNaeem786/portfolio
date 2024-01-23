import React from "react";
import image from "../assets/profile.png"
import "../styles/header.css"
import {GrLinkedin} from "react-icons/gr";
import {FaGithub} from "react-icons/fa";

export default function Header (){
    return(
            <div className={"mainAbout"}>
                <img className={"profile"} src={image}/>
                <div>

                    <div className={"intro"}>
                        <h3> Hi, I'm</h3>
                        <h1>Waqar Naeem</h1>
                        <h2>Full Stack Developer</h2>
                    </div>

                    <div className={"docs"}>
                        <button className={"cvBtn"}>
                        <a href="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/waqar-naeem/150280b4-c95c-4456-a50a-9e681f32f8b8?view=html   ">
                            Download CV
                        </a>
                        </button>
                        <button className={"info"}>
                            <a href={'https://www.linkedin.com/in/waqar-naeem-b6a91a194/'}>
                                <p>
                                    Contact Info

                                </p>
                            </a>
                        </button>
                    </div>

                    <div className={"social"}>

                        <GrLinkedin size={20}/>
                        <FaGithub size={20}/>

                    </div>

                </div>

            </div>

    )
}