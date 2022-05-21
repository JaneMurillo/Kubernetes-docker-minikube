import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../images/knitting.png'

export function Header() {
  const [open, setOpen] = useState('closed');
  const changeOpen = () => {
    setOpen(open === 'closed' ? 'open' : 'closed');
  };

  return (
    <>
      <header>
          <div className="burguer-icon" onClick={changeOpen}>
            <div className={`burguer-bar ${open}`}></div>
            <div className={`burguer-bar ${open}`}></div>
            <div className={`burguer-bar ${open}`}></div>
          </div>

          <h3 className={`menu-title ${open}`}>MENÚ</h3>
          <img className='Logo' alt='logo' src={logo}/>

        <div className={`back-nav ${open}`}></div>
        <ul className={`head-nav-ul ${open}`}>
          <li>
            <a className='head-a-title' href='#'>CrochetBi</a>
          </li>
          <li>
            <a className='head-a' href='#'>Home</a>
          </li>
        </ul>
      </header>

      <div className={`overlay ${open}`}></div>
    </>
  );
}