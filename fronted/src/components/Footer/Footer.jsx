import { assets } from "../../assets/assets"
import "./Footer.css"

export const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fuga quis dolores, corporis reprehenderit nobis nemo harum. Possimus, a beatae.</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="fb-icon" />
                    <img src={assets.twitter_icon} alt="twitter-icon" />
                    <img src={assets.linkedin_icon} alt="linkedIn-icon" />
                </div>
            </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+12 223 34567</li>
                        <li>contact@tomato@gmail.com</li>
                    </ul>
                </div>
            
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}
