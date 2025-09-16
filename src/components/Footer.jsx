import { Link } from "react-router-dom";
import { BsFacebook, BsTwitterX, BsInstagram } from "react-icons/bs";
import { CiMail, CiPhone, CiMap } from "react-icons/ci";
import './Footer.css'

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-columns">
                <div className="footer-logo">
                    <p>Super Store</p>
                </div>

                <div>
                    <h4>Contact Us</h4>
                    <p><CiMail /> Email: info@furniturehaven.com</p>
                    <p><CiPhone /> Phone: (123) 456-7890</p>
                    <p><CiMap /> Address: 123 Furniture St, Design City, CA 90210</p>
                </div>

                <div>
                    <h4>Follow Us</h4>
                    <div className="socials">
                        <Link to="#"><BsFacebook /> Facebook</Link>
                        <Link to="#"><BsTwitterX /> Twitter</Link>
                        <Link to="#"><BsInstagram /> Instagram</Link>
                    </div>
                </div>
            </div>

            <p className="footer-bottom">© {new Date().getFullYear()} F.Store. All rights reserved.</p>
        </footer>
    )
}
export default Footer;