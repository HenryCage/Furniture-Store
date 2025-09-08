import { Link } from "react-router-dom"
import { BsCart4 } from "react-icons/bs";
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"><Link to='/'>Panto</Link></div>

      {/* Links */}
      <ul className="nav-links">
        <li><a href="/shop">Furnitures</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="cart">
        <BsCart4 size={22} color="white" />
      </div>
    </nav>
  );
}


export default Navbar