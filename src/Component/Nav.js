import React, { useState } from 'react'
import { NavLink,useNavigate } from "react-router-dom";
import "../navbar.css"
import { FaAlignJustify, FaExpandArrowsAlt } from "react-icons/fa";

const Nav = () => {
    let [isOpen, setOpen] = useState(false)
    let navigat=useNavigate();
    function handle_navigate()
    {

        navigat("/xyz")
    }
    return (
        <nav >
            <NavLink to="/" className='left'>Website</NavLink>
            <div className={isOpen ? "right-nav right-navOpen" : "right-nav"}>
                {/* <button onClick={ handle_navigate}>Relative path</button> */}
                <NavLink to="/about" onClick={() => setOpen(false)}>about</NavLink>
                <NavLink to="/contact" onClick={() => setOpen(false)}>contact us</NavLink>
                <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
            </div>
            {
                isOpen === false ?
                    (
                        <div className='menu-icon' onClick={() => setOpen(isOpen ? false : true)}>
                            <  FaAlignJustify />
                        </div>
                    )
                    :
                    (
                        <div className='menu-icon' onClick={() => setOpen(isOpen ? false : true)}>
                            <  FaExpandArrowsAlt />
                        </div>
                    )
            }
        </nav>
    )
}

export default Nav
// slash lagoge to relative path banega , base url s start hoga