import React from "react"
import "../styles/project.css"
import Tab from "./Tab";
import Contact from "./Contact"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"

export default function Project (){
    return(
        <div className={"p"}>
            <Tab/>
            <div className={"mainProject"}>
                <p>
                    Browse My Recent
                </p>
                <h1>
                    Projects
                </h1>
            </div>



            <div className={"allcards"}>
                <div className={"projectCards"}>
                    <img src={'https://img.itch.zone/aW1hZ2UvNjMwNDc2LzMzNjUyNDUuanBn/347x500/G75J0f.jpg'}/>
                    <h1>
                        Sanatize
                    </h1>
                    <div>
                        <a href={"https://waqar-naeem.itch.io/sanatize"}>
                            <button>
                                itch.io
                            </button>
                        </a>
                    </div>
                </div>

                <div className={"projectCards"}>
                    <img className={"embeded"} src={project2}/>
                    <h1>
                        Scrapper
                    </h1>
                            <a href="https://github.com/waqarNaeem786/scrapper/">
                                <button>
                                    GitHub
                                </button>
                            </a>
                </div>

                <div className={"projectCards"}>
                    <img className={"githubpic"} src={project3}/>
                    <h1>
                        Manga Reader
                    </h1>
                            <a href="https://github.com/waqarNaeem786/manga-reader/">
                                <button>
                                    GitHub
                                </button>
                            </a>

                </div>
            </div>
            <Contact />
        </div>

    )
}