import { Link } from 'react-router-dom';
import React from 'react';
import '../Header/Header.css';

import menu from '../../images/icon-menu.png';

function Header() {
    return (
        <header className="header-container">
            <div className="inicio">
                <Link to='/'>
                Início
                </Link>
            </div>
            <input type="checkbox" id="toggle" />
            <label htmlFor="toggle" id="toggle-label"><img src={ menu } className="menu-img" /></label>
            <div className="menu">
                <ul className="list">
                    <li><Link to='/projetos'>
                        Projetos
                    </Link></li>
                    <li><Link to='/contato'>
                        Contato
                    </Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
