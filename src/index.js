import { createRoot }  from "react-dom/client"
// import { useState } from "react"



import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// Importing Links component.
import { HomeMessage, AboutMe, Portfolio, Footer } from "./components";

const MainComponent = () => {
    return (
        <BrowserRouter>
            {/* This doesn't actually mean anything, but it looks regal. */}
            <p><em>Version 3.17.98.</em></p>
            
            <div className = "total-container">
                {/* Encapsulating everything, hope nothing breaks. */}
                {/* I guess we're not supposed to do a... yeah, I get it, I get it. */}
                {/* <NavBar /> */}
                <nav className="nav-bar">
                    {/* <a className="nav-item" id="current-page" href="index.html">Home Page</a> */}
                    <Link to="/" className="nav-item">Homepage</Link>
                    {/* <a className="nav-item" href="about.html">About Page</a> */}
                    <Link to="/about-me" className= "nav-item">About Me</Link>
                    <Link to="/portfolio" className= "nav-item">Portfolio</Link>
                    {/* <a className="nav-item" href="portfolio.html">Portfolio</a> */}
                </nav>

                {/* Main content of the page. */}
                <div className="home-content">
                    <Routes>
                        <Route path="/" element={<HomeMessage />} />
                        <Route path="/about-me" element={<AboutMe />} />
                        <Route path="/portfolio" element={<Portfolio />} /> 
                    </Routes>
                    {/* <Links /> */}
                </div>
                
                {/* Footer used across all pages */}
                <Footer />
            </div>
        </BrowserRouter>
    )
}

let appEle = document.getElementById("app");
let root = createRoot(appEle);
root.render(<MainComponent/>)