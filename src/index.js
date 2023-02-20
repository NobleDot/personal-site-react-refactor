import { createRoot }  from "react-dom/client"
import { useState } from "react"

// Importing Links component.
import Links from "./components/Links";
import HomeMessage from "./components/HomeMessage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const MainComponent = () => {
    return (
        <div>
            {/* Encapsulating everything, hope nothing breaks. */}
            <NavBar />

            {/* Main content of the page. */}
            <div className="home-content">
                <HomeMessage/>
                <Links />
            </div>
            
            {/* Footer used across all pages */}
            <Footer />
        </div>
    )
}

let appEle = document.getElementById("app");
let root = createRoot(appEle);
root.render(<MainComponent/>)