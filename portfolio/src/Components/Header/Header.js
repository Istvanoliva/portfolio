import { Link } from 'react-router-dom';
import React from 'react';
import '../Header/Header.css';

// import img from '../../images/icon-home.png';

function Header() {
    return (
        <header className="header-container">
            <div className="link-container">
                <Link to='/'>
                    <button className="btn-header">
                        Início
                    </button>                    
                </Link>
            </div>
            <div className="header-nav">
                <div className="link-container">
                    <Link to='/projetos'>
                        <button className="btn-header">
                    Projetos
                        </button>
                    </Link>
                </div>
                <div className="link-container">
                    <Link to='/contato'>
                        <button className="btn-header">
                    Contato
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
