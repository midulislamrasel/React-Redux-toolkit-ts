"use client"; // If this component includes any client-side interactivity (like event handlers)

import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <Link href="/">
                        <a>MyApp</a>
                    </Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
