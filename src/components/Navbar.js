import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'
import '../styles/NavbarStyle.css'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    
    return (
        <>
            <nav className="header">
                <Link to="/" className="navbar-logo">
                    <h2>BreakEVEN</h2>
                    {/* <img src={logo} alt="Home" />*/}
                </Link>
                <div className="navbar-container">
                    <ul className={click ? 'nav-menu active' :'nav-menu'} >
                        <li onClick={handleClick}>
                            <Link to ="/Chase">Chase</Link>
                        </li>
                        <li onClick={handleClick}>
                            <Link to ="/CapitalOne">Capital One</Link>
                        </li>
                        <li onClick={handleClick}>
                            <Link to ="/Amex"> Amex </Link>
                        </li>

                    </ul>
                    <div className='hamburger' onClick={handleClick}>
                        {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar;

/*
   

    const[url, setUrl] = useState(true)
    const handleUrl = () => setUrl(false)

<li className='freedomLink'>
{url ? (<Link to ="CF">Chase Freedom</Link>): (<Link to ="" onClick={event =>event.preventDefault()}>Chase Freedom</Link>)}

<button className='freedomLink' onClick={handleUrl}>
</button>
</li>
*/