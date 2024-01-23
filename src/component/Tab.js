// Tab.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/tab.css";

export default function Tab() {
    const [click, setClick] = useState(false);

    const setClickListener = () => {
        setClick(!click);
    }

    return (
        <div className="tab">
            <div className="container">
                <Link to="/">
                    <h1>
                        Waqar Naeem
                    </h1>
                </Link>

                <div className={click ? "anchor active" : "anchor"}>
                    <Link to="/about">About</Link>
                    <Link to="/experience">Experience</Link>
                    <Link to="/project">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="hamburger" onClick={setClickListener}>
                    {click ? (
                        <FaTimes className="times-icon" size={20}></FaTimes>
                    ) : (
                        <FaBars className="bar-icon" size={20} />
                    )}
                </div>
            </div>
        </div>
    );
}
