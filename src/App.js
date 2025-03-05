// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles/app.css";

import Home from "./pages/Home";
import Blogs from './pages/Blogs';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import IndoPak from './posts/IndoPak';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path='/IndoPak' element={<IndoPak />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
