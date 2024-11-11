// src/components/Footer.js
import React from 'react';
import "../CSS/Footer.css";
import Insta from '../icons/Instagram.svg';
import Globe from '../icons/Globe.svg';
import X from '../icons/Twitter.svg';
import Zap from '../icons/Whatsapp.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-brand">Sabor do Brasil</div>
            
            <div className="footer-icons">
                <img src={Globe} alt="Website" className="icon" />
                <img src={Insta} alt="Instagram" className="icon" />
                <img src={X} alt="Twitter" className="icon" />
                <img src={Zap} alt="WhatsApp" className="icon" />
            </div>
            
            <div className="footer-copyright">Copyright - 2024</div>
        </footer>
    );
}

export default Footer;