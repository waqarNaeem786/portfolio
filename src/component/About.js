// Tab.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/tab.css";
import {IoMdMail} from "react-icons/io";
import {GrLinkedin} from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";


export default function Tab() {
  const [click, setClick] = useState(false);

  const setClickListener = () => {
    setClick(!click);
  }

  return (
    <div className="tab">

      <div className='text_val'>
        <h4>
          i am learning about new tech everyday, i am focuing on making and shiping of
        </h4>

        <h4>
          products which are valuebale to end user, also i am freelancer at fiverr.
        </h4>

        <div className='tab_icons'>
          <a href={"mailto:neutrone04@gmail.com"}><IoMdMail size={25}/><p>Mail</p> </a>
          <a href="https://www.linkedin.com/in/waqar-naeem-b6a91a194/"><GrLinkedin size={20}/><p>LinkedIn</p></a>  
          <a href="https://github.com/waqarNaeem786"><IoLogoGithub size={25}/><p>Github</p></a>  

        </div>
        
      </div>

    </div>
  );
}
