import React, { useState } from 'react'
import "./navbar.scss"
import logo from "../images/logo.png"
import { FaGripLines } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    return (
        <>

            <header>
                <div className='container flexsb'>
                    <div className='logo'>
                        <a href='#'> <img src={logo} alt="img" /> </a>
                    </div>

                    <ul className={open ? 'nav hideMenu' : "nav"}>
                        <li className='different' onClick={toggle}><a href="#"> Home </a></li>
                        <li className='different' onClick={toggle}><a href="#services"> Services </a></li>
                        <li className='different' onClick={toggle}><a href="#projects"> Projects </a></li>
                        <li className='different' onClick={toggle}><a href="#reviews"> Reviews </a></li>
                        <li className='different' onClick={toggle}><a href="#contact"> Contact </a></li>
                    </ul>
                    <button className='toggle' onClick={() => setOpen(!open)}>
                        {open ? <RxCross1 /> : <FaGripLines />}
                    </button>
                </div>
            </header>
        </>
    )
}

export default Navbar