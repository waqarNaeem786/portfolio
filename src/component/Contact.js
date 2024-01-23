import React from "react";
import "../styles/contact.css"
import {IoMdMail} from "react-icons/io";
import {GrLinkedin} from "react-icons/gr";
import Tab from "./Tab";

export default function contact(){
    return(
        <div>
            <Tab/>
            <div className={"mainContact"}>

                <p>
                    Get In Touch
                </p>
                <h1>
                    Contact Me
                </h1>

                <div className={"contact"}>
                    <IoMdMail size={25}/>
                    <a href={"mailto:neutrone04@gmail.com"}>neutrone04@gmail.com</a>

                    <GrLinkedin size={20}/>
                    <a href="https://www.linkedin.com/in/waqar-naeem-b6a91a194/">LinkedIn</a>
                </div>

                <p>Copyright © 2023 Waqar Naeem. All Rights Reserved.</p>
            </div>
        </div>

    )
}