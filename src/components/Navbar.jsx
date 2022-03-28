import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';

import logo from "../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
    <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);


const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className='grid md:justify-center justify-items-center p-4'>
            <div className='md:flex-[0.5] flex-initial  items-center'>
                <img src={logo} alt="logo" className="w-32 cursor-pointer" />
            </div>
        </nav>
    )
}

export default NavBar