import { Link } from "react-router-dom"
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo"><Link to='/'>F.Store</Link></div>

            <div className="nav-links">
                <Link to='/shop'>Shop</Link>
                <Link to='/about'>About Us</Link>
                <Link to='#contact' className="text-blue-600 underline">Contact</Link>
            </div>
            <div className="cart">
                <BsCart4 size={24} color="white"/>
            </div>
        </nav>
    )
}

export default Navbar