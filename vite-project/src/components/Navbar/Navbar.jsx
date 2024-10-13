import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("Home");  // Default to "Home"
    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <div className='navbar'>
            <Link to="/"><img src={assets.logo} alt="Logo" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link to="/" onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
                <Link to="/#explore-menu" onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</Link>
                <Link to="/#app-download" onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</Link>
                <Link to="/#footer" onClick={() => setMenu("Contact us")} className={menu === "Contact us" ? "active" : ""}>Contact us</Link>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt='Search icon' className="navbar-search-icon" />
                <div className="navbar-cart">
                    <Link to="/cart">
                        <img src={assets.basket_icon} alt='Basket icon' />
                    </Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"} />
                </div>
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    );
}

export default Navbar;
