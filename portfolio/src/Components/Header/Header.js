import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
    return (
        <header>
            <Link to='/'>Início</Link>
            <Link to='/projetos'>Projetos</Link>
            <Link to='/contato'>Contato</Link>
        </header>
    );
}

export default Header;
