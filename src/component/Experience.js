import React from "react";
import "../styles/experince.css"
import {HiCheckBadge} from "react-icons/hi2";
import Tab from "./Tab";
import Contact from "./Contact"
export default function Experience (){
    return(
        <div className={"exp"}>
            <Tab/>
            <div className={"mainExp"}>
                <p>
                    Explore My
                </p>
                <h1>
                    Experience
                </h1>
            </div>

            <div className={"card"}>
                <div className={"frontCard"}>
                    <div>
                        <h1>
                            Front-End Stack
                        </h1>

                        <div className={"frontStack"}>
                            <div>
                                <h3>
                                    <HiCheckBadge size={20}/>
                                    HTML
                                </h3>
                                <h3>
                                    <HiCheckBadge size={20}/>
                                    CSS
                                </h3>
                                <h3>
                                    <HiCheckBadge size={20}/>
                                    JavaScript
                                </h3>

                            </div>

                            <div>
                                <h3>
                                    <HiCheckBadge size={20}/>
                                    React
                                </h3>
                                <h3>
                                    <HiCheckBadge size={20}/>
                                    Material UI
                                </h3>
                                <h3>
                                    <HiCheckBadge size={20}/>
                                    BootStrap
                                </h3>
                            </div>

                        </div>

                    </div>
                </div>

                <div className={"frontCard"}>
                    <div className={"border"}>
                        <h1>
                            Backend Stack
                        </h1>

                        <div className={"frontStack"}>
                            <div>
                                <h3>
                                    <HiCheckBadge size={20}/>
                                    Node js
                                </h3>
                                <h3>
                                    <HiCheckBadge size={20}/>
                                    Express js
                                </h3>
                                <h3>
                                    <HiCheckBadge size={20}/>
                                    JavaScript
                                </h3>

                            </div>

                            <div>
                                <h3>
                                    <HiCheckBadge size={20}/>
                                    Postgres
                                </h3>
                                <h3>
                                    <HiCheckBadge size={20}/>
                                    FireBase
                                </h3>
                                <h3>
                                    <HiCheckBadge size={20}/>
                                    GIT
                                </h3>
                            </div>

                        </div>

                    </div>
                </div>

                {/*<div className={"frontCard"}>*/}
                {/*    <div className={"border"}>*/}
                {/*        <h1>*/}
                {/*            Dilo G*/}
                {/*        </h1>*/}

                {/*        <div className={"frontStack"}>*/}
                {/*            <div>*/}

                {/*                <h3>*/}
                {/*                    <HiCheckBadge size={20}/>*/}
                {/*                    Gol Ankho Waali*/}
                {/*                </h3>*/}
                {/*                <h3>*/}
                {/*                    <HiCheckBadge size={20}/>*/}
                {/*                    Mere Jaan*/}
                {/*                </h3>*/}

                {/*            </div>*/}

                {/*            <div>*/}
                {/*                <h3>*/}
                {/*                    <HiCheckBadge size={20}/>*/}
                {/*                    Mere mitho*/}
                {/*                </h3>*/}
                {/*                <h3>*/}
                {/*                    <HiCheckBadge size={20}/>*/}
                {/*                    Mera Dil*/}
                {/*                </h3>*/}
                {/*                <h3>*/}
                {/*                    <HiCheckBadge size={20}/>*/}
                {/*                    Mera Jahan*/}
                {/*                </h3>*/}
                {/*            </div>*/}

                {/*        </div>*/}

                {/*    </div>*/}
                {/*</div>*/}

            </div>

                <Contact />
                    </div>
    )
}