import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="flex justify-center">
                <p>Danmark C. Guarin Application for Lemon Drop Technologies Screening © {year}</p>
            </div>

        </footer>
    );
}

export default Footer;