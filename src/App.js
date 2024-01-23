// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles/app.css"

import Home from "./pages/Home"
import About from "./component/About";
import Experience from "./component/Experience";
import Project from "./component/Project";
import Contact from "./component/Contact";


function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
