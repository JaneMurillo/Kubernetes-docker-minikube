import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

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
        

        <div className={`back-nav ${open}`}></div>
        <ul className={`head-nav-ul ${open}`}>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </header>

      <div className={`overlay ${open}`}></div>
    </>
  );
}
