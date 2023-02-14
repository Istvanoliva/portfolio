import { Link } from 'react-router-dom';
import React from 'react';
import '../Header/Header.css';

import img from '../../images/icon-home.png';

function Header() {
    return (
        <header className="header-container">
            <div className="link-container">
                <Link to='/'>
                    <img src={ img } id="home-icon"/>
                </Link>
            </div>
            <div className="header-nav">
                <div className="link-container">
                    <Link to='/projetos'>
                        <button>
                    Projetos
                        </button>
                    </Link>
                </div>
                <div className="link-container">
                    <Link to='/contato'>
                        <button>
                    Contato
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
