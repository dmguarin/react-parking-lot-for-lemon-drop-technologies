import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Danmark C. Guarin Application for Lemon Drop Technologies Screening {year}</p>
        </footer>
    );
}

export default Footer;