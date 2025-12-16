import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: '#1f2937', color: 'white', padding: '2rem 0', textAlign: 'center' }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} GOKU Portofolio by Irham Najib Azimul Qowi. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
