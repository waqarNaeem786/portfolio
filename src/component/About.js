import React from "react";
import "../styles/about.css"
import {SlBadge} from "react-icons/sl";
import {BsFillMortarboardFill} from "react-icons/bs";
import Tab from "./Tab";
import Contact from "./Contact"
export default function About (){
    return(
        <div className={"about"}>
            <Tab/>
            <div className={"about"}>
                <div className={'mainHead'}>
                    <p>
                        Get To Know more
                    </p>
                    <h1>
                        About Me
                    </h1>
                </div>

                <div className={"cards"}>
                    <div className={"section"}>
                        <section>
                            <h1>Experience</h1>
                            <SlBadge size={40} style={{color:"coral"}} />
                            <p>
                                4+ years
                            </p>

                            <p>
                                Full Stack Development
                            </p>

                        </section>

                        <section>
                            <h1>Education</h1>
                            <BsFillMortarboardFill size={40} />
                            <p>
                                Bachelors in International Relation's
                            </p>

                        </section>
                    </div>


                    <p className={"text"}>
                        Innovative and results-driven Full-Stack developer with a fervent passion for international relations. Experienced in crafting impactful theses that
                        delve into complex global issues, while also developing cutting-edge web applications that seamlessly blend technology and human interaction.
                        Adept at bridging the realms of research and technology, I possess a deep commitment to effective communication and a drive to leverage my
                        diverse skill set for impactful solutions in an ever-evolving global landscape.
                    </p>

                </div>
            </div>

            <Contact/>
        </div>
    )
}