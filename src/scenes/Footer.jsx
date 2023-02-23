import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
        <h1>Seasoned. Nimble. Remote.</h1>
        <p>We're a diverse and passionate team that takes ownership of your learning and empower you to execute the roadmap. We stay light on our feet and truly enjoy delivering what you need.</p>
        <div className="footer-buttons">
            <button><Link to={"/terms"}>📜Terms and condition </Link></button>
            <button><Link to={"/refund"}>💰Refund Policy</Link></button>
            <button><Link to={"/privacy"} >🔏Privacy Policy</Link></button>
            <button>👋Support</button>
            <button>👀Career</button>
        </div>
        <div className="footer-social">
            <div><i class="fa-brands fa-facebook-f"></i></div>
            <div><i class="fa-brands fa-linkedin-in"></i></div>
            <div><i class="fa-brands fa-twitter"></i></div>
        </div>
        <div className="hr"></div>
        <div className="copyright">© 2019 Lift Media. All Rights Reserved.</div>
    </div>
  )
}

export default Footer