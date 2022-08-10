import React ,{useState}from 'react';
import './Header.scss';
import {images} from '../images';

function Header() {

    const[open,setOpen] = useState(false);
    const clickHnadler = (e) => {
        e.preventDefault();
        setOpen(!open)

    }
    return (
    <div>
        <header>
            <nav className='navbar container'>
                <div className='logo'>
                    <img src={images.logo} alt=""/>
                </div>
                <ul className={open ? `nav-items active` : `nav-items`}>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Portfolio</li>
                    <li className='btn btn--nav-btn'>View Plans</li>
                </ul>
                <div className='hamburger'>
                    <img src={images.hamburger} alt="" onClick={clickHnadler}/>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header