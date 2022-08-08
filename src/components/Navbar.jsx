import React, { useState } from "React";
import { Navlink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <div className="navbar-brand">
                    <a
                        role="button"
                        className={`navbar-burger burger ${isOpen && "is-active"}`}
                        aria-label="menu"
                        aria-expanded="false"
                        onClick={() => setOpen(!isOpen)}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <h3>My Story</h3>
                <h3>Github</h3>
                <h3>Home</h3>
                <h3>Download My Resume</h3>
                <h3>Contact</h3>
            </div>
        </nav>
    )
}

export default Navbar