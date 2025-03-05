import React from "react";
import Header from "../component/Header";
import Project from "../component/Project";
import Footbar from "../component/Footbar";
import Writings from "../component/Writings"
export default function Home () {
    return (
        <div>
            <Header/>        
            <div>
                        <h1>
                            HI, I'm Waqar Naeem!
                        </h1>
                        <h3>
                            Software Developer, Security Researcher and Student of International Relations.
                        </h3>
                        <span>
                            I have worked as Software Developer with several startups recently.
                            I worked as a Android Developer at AlfaLogix and with Nephus as
                            the Backend Developer, Nephus helps investors efficently invest in Crypto Stocks.
                        </span>

                    </div>
                    <br />

                <a className="aboutMe" href="/about">
                    More About me ...
                </a>


                    <br />
                    <br />
                   

                    <hr/>

                <Project />
                <hr/>
                <br/>
               

                <Writings/>
               <Footbar/>
        </div>
    );
};