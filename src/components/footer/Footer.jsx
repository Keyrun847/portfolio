import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Keyrun847</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/kiran-veer" className="footer__social-link" target="_blank" >
                    <i class="uil uil-linkedin-alt"></i>
                </a>

                <a href="https://github.com/Keyrun847" className="footer__social-link" target="_blank" >
                    <i class="uil uil-github-alt"></i>
                </a>

                <a href="https://www.instagram.com/key_run847" className="footer__social-link" target="_blank" >
                    <i className="uil uil-instagram"></i>
                </a>
            </div>
            <span className="footer__copy">
                &#169; Keyrun847. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer